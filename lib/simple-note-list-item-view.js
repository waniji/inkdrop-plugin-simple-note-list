'use babel'

import * as React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function SimpleNoteListItemView(props) {
  const { active, focused, note } = props
  const { title, updatedAt } = note
  const fromNow = moment(updatedAt).fromNow()

  function handleClick(e) {
    props.onClick && props.onClick(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDblClick(e) {
    props.onDblClick && props.onDblClick(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleContextMenu(e) {
    props.onContextMenu && props.onContextMenu(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={`simple-note-list note-list-item-view ${active &&
        'active'} ${focused && 'focused'}`}
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      onContextMenu={handleContextMenu}
    >
      <div class="content">
        <div class="header">{title}</div>
        <div class="description">
          <div class="meta">
            <span class="date">{fromNow}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

SimpleNoteListItemView.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  note: PropTypes.object,
  onClick: PropTypes.func,
  onDblClick: PropTypes.func,
  onContextMenu: PropTypes.func
}

export function registerAsNoteListItemView() {
  inkdrop.components.registerClass(
    SimpleNoteListItemView,
    'CustomNoteListItemView'
  )
}

export function unregisterAsNoteListItemView() {
  inkdrop.components.deleteClass(
    SimpleNoteListItemView.default,
    'CustomNoteListItemView'
  )
}
