'use babel'

import { CompositeDisposable } from 'event-kit'
import * as SimpleNoteListItemView from './simple-note-list-item-view'

class SimpleNoteListPlugin {
  activate() {
    SimpleNoteListItemView.registerAsNoteListItemView()
  }

  deactivate() {
    SimpleNoteListItemView.unregisterAsNoteListItemView()
  }
}

module.exports = new SimpleNoteListPlugin()
