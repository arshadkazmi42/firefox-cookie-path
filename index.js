const path = require('path');
const _ = require('lodash');

const firefoxUserDirectory = require('firefox-user-directory');
const firefoxProfiles = require('firefox-profiles');

const SQLITE_FILE_NAME = 'cookies.sqlite';


module.exports = (name, platform) => {
  const directory = firefoxUserDirectory(platform);
  const profiles = firefoxProfiles(platform);
  const profileName = name || 'default';
  const profile = _.find(profiles, (profile) => profile.Name === profileName);
  if (!profile) {
    throw new Error(`${name} profile not found`);
  }

  return path.join(directory, profile.Path, SQLITE_FILE_NAME);
};
