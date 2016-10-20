import { Meteor } from 'meteor/meteor';

import { memwatch } from 'memwatch-next';

const idlegc = require('idle-gc')
idlegc.start()

Meteor.startup(() => {
  // code to run on server at startup
});
