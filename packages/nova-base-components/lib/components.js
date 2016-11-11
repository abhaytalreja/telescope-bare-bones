import Telescope from 'meteor/nova:lib';

// common

Telescope.registerComponent("App",                  require('./common/App.jsx'));
Telescope.registerComponent("Footer",               require('./common/Footer.jsx'));
Telescope.registerComponent("Header",               require('./common/Header.jsx'));
Telescope.registerComponent("Layout",               require('./common/Layout.jsx'));
Telescope.registerComponent("Logo",                 require('./common/Logo.jsx'));
Telescope.registerComponent("Flash",                require('./common/Flash.jsx'));
Telescope.registerComponent('HeadTags',             require('./common/HeadTags.jsx'));
Telescope.registerComponent("FlashMessages",        require('./common/FlashMessages.jsx'));
Telescope.registerComponent("Newsletter",           require('./common/Newsletter.jsx'));
Telescope.registerComponent("NewsletterButton",     require('./common/NewsletterButton.jsx'));
Telescope.registerComponent("Icon",                 require('./common/Icon.jsx'));
Telescope.registerComponent("SearchForm",           require('./common/SearchForm.jsx'));
Telescope.registerComponent("AppLoading",           require('./common/AppLoading.jsx'));
Telescope.registerComponent("Error404",             require('./common/Error404.jsx'));
Telescope.registerComponent("Loading",              require('./common/Loading.jsx'));
Telescope.registerComponent("Vote",                 require('./common/Vote.jsx'));
Telescope.registerComponent("SettingsEditForm",     require('./common/SettingsEditForm.jsx'));

// permissions

Telescope.registerComponent("CanDo",                require('./permissions/CanDo.jsx'));

// users

Telescope.registerComponent("UsersSingle",          require('./users/UsersSingle.jsx'));
Telescope.registerComponent("UsersAccount",         require('./users/UsersAccount.jsx'));
Telescope.registerComponent("UsersEdit",            require('./users/UsersEdit.jsx'));
Telescope.registerComponent("UsersProfile",         require('./users/UsersProfile.jsx'));
Telescope.registerComponent("UsersProfileCheck",    require('./users/UsersProfileCheck.jsx'));
Telescope.registerComponent("UsersAvatar",          require('./users/UsersAvatar.jsx'));
Telescope.registerComponent("UsersName",            require('./users/UsersName.jsx'));
Telescope.registerComponent("UsersMenu",            require('./users/UsersMenu.jsx'));
Telescope.registerComponent("UsersAccountMenu",     require('./users/UsersAccountMenu.jsx'));
Telescope.registerComponent("UsersAccountForm",     require('./users/UsersAccountForm.jsx'));