/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const mapValuesByKeys = require('../lib/functional').mapValuesByKeys

const _ = null
const windowConstants = {
  WINDOW_SET_URL: _,
  WINDOW_SET_NAVBAR_INPUT: _,
  WINDOW_NEW_FRAME: _,
  WINDOW_VIEW_KEY: _,
  WINDOW_CLOSE_FRAME: _,
  WINDOW_CLOSE_FRAMES: _,
  WINDOW_SET_ACTIVE_FRAME: _,
  WINDOW_SET_FOCUSED_FRAME: _,
  WINDOW_SET_PREVIEW_FRAME: _,
  WINDOW_SET_PREVIEW_TAB_PAGE_INDEX: _,
  WINDOW_SET_TAB_PAGE_INDEX: _,
  WINDOW_SET_TAB_BREAKPOINT: _,
  WINDOW_SET_TAB_HOVER_STATE: _,
  WINDOW_SET_IS_BEING_DRAGGED_OVER_DETAIL: _,
  WINDOW_TAB_MOVE: _,
  WINDOW_SET_THEME_COLOR: _,
  WINDOW_WEBVIEW_LOAD_END: _,
  WINDOW_SET_FULL_SCREEN: _,
  WINDOW_SET_LINK_HOVER_PREVIEW: _,
  WINDOW_SET_URL_BAR_SUGGESTIONS: _,
  WINDOW_SET_RENDER_URL_BAR_SUGGESTIONS: _,
  WINDOW_URL_BAR_AUTOCOMPLETE_ENABLED: _,
  WINDOW_SEARCH_SUGGESTION_RESULTS_AVAILABLE: _,
  WINDOW_URL_BAR_SUGGESTIONS_CLEARED: _,
  WINDOW_PREVIOUS_URL_BAR_SUGGESTION_SELECTED: _,
  WINDOW_NEXT_URL_BAR_SUGGESTION_SELECTED: _,
  WINDOW_ACTIVE_URL_BAR_SUGGESTION_CLICKED: _,
  WINDOW_WEBVIEW_LOAD_START: _,
  WINDOW_ADD_HISTORY: _,
  WINDOW_SET_FRAME_ERROR: _,
  WINDOW_SET_FRAME_TAB_ID: _,
  WINDOW_SET_FRAME_TITLE: _,
  WINDOW_SET_NAVIGATED: _,
  WINDOW_SET_NAVIGATION_ABORTED: _,
  WINDOW_SET_URL_BAR_ACTIVE: _, // whether the URL bar is being typed in
  WINDOW_UNDO_CLOSED_FRAME: _,
  WINDOW_CLEAR_CLOSED_FRAMES: _,
  WINDOW_SET_ACTIVE_FRAME_SHORTCUT: _,
  WINDOW_SET_URL_BAR_SELECTED: _,
  WINDOW_SET_URL_BAR_FOCUSED: _,
  WINDOW_SET_SEARCH_DETAIL: _,
  WINDOW_SET_FIND_DETAIL: _,
  WINDOW_SET_BOOKMARK_DETAIL: _, // If set, also indicates that add/edit is shown
  WINDOW_SET_CONTEXT_MENU_DETAIL: _, // If set, also indicates that the context menu is shown
  WINDOW_SET_CONTEXT_MENU_SELECTED_INDEX: _,
  WINDOW_SET_POPUP_WINDOW_DETAIL: _, // If set, also indicates that the popup window is shown
  WINDOW_HIDE_BOOKMARK_HANGER: _,
  WINDOW_SET_AUDIO_MUTED: _,
  WINDOW_SET_AUDIO_PLAYBACK_ACTIVE: _,
  WINDOW_SET_FAVICON: _,
  WINDOW_SET_MAXIMIZE_STATE: _,
  WINDOW_SAVE_POSITION: _,
  WINDOW_SAVE_SIZE: _,
  WINDOW_SET_FULLSCREEN_STATE: _,
  WINDOW_SET_MOUSE_IN_TITLEBAR: _,
  WINDOW_SET_FINDBAR_SHOWN: _, // whether the findbar is shown
  WINDOW_SET_FINDBAR_SELECTED: _, // whether the findbar is active
  WINDOW_SET_PINNED: _, // Whehter the current tab is pinned or not
  WINDOW_SET_SITE_INFO_VISIBLE: _, // Whether or not to show site info like # of blocked ads
  WINDOW_SET_BRAVERY_PANEL_DETAIL: _, // Whether or not to show the Bravery panel and info about how to show it
  WINDOW_SET_DOWNLOADS_TOOLBAR_VISIBLE: _, // Whether or not to show the downloads toolbar
  WINDOW_SET_RELEASE_NOTES_VISIBLE: _, // Whether or not to show release notes
  WINDOW_SET_NOSCRIPT_VISIBLE: _, // Whether or not to show noscript info
  WINDOW_SET_BLOCKED_BY: _, // Whether or not to show site info like # of blocked ads
  WINDOW_SET_REDIRECTED_BY: _, // Whether or not to show site info like redirected resources
  WINDOW_SET_SECURITY_STATE: _,
  WINDOW_SET_STATE: _,
  WINDOW_SET_LAST_ZOOM_PERCENTAGE: _,
  WINDOW_SET_CLEAR_BROWSING_DATA_VISIBLE: _,
  WINDOW_SET_IMPORT_BROWSER_DATA_DETAIL: _,
  WINDOW_SET_IMPORT_BROWSER_DATA_SELECTED: _,
  WINDOW_SET_AUTOFILL_ADDRESS_DETAIL: _,
  WINDOW_SET_AUTOFILL_CREDIT_CARD_DETAIL: _,
  WINDOW_SET_BLOCKED_RUN_INSECURE_CONTENT: _,
  WINDOW_TOGGLE_MENUBAR_VISIBLE: _,
  WINDOW_CLICK_MENUBAR_SUBMENU: _,
  WINDOW_RESET_MENU_STATE: _,
  WINDOW_SET_MENUBAR_SELECTED_INDEX: _,
  WINDOW_SET_LAST_FOCUSED_SELECTOR: _,
  WINDOW_GOT_RESPONSE_DETAILS: _,
  WINDOW_SET_BOOKMARKS_TOOLBAR_SELECTED_FOLDER_ID: _,
  WINDOW_ON_FOCUS_CHANGED: _,
  WINDOW_SET_MODAL_DIALOG_DETAIL: _,
  WINDOW_WIDEVINE_SITE_ACCESSED_WITHOUT_INSTALL: _,
  WINDOW_WIDEVINE_PANEL_DETAIL_CHANGED: _,
  WINDOW_AUTOFILL_SELECTION_CLICKED: _,
  WINDOW_AUTOFILL_POPUP_HIDDEN: _,
  WINDOW_TAB_CLOSED_WITH_MOUSE: _,
  WINDOW_TAB_MOUSE_LEAVE: _
}

module.exports = mapValuesByKeys(windowConstants)
