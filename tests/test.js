const { expect } = require('chai');
const path = require('path');
const _ = require('lodash');
const firefoxProfiles = require('firefox-profiles');

const firefoxCookiePath = require('../index');

const PATHS = {
  'darwin': (process.platform === 'darwin') ? path.join(process.env.HOME, '/Library/Application Support/Firefox') : '',
  'linux': (process.platform === 'linux') ? path.join(process.env.HOME, '/.mozilla/firefox') : '',
  'win32': (process.platform === 'win32') ? path.join(process.env.APPDATA, '/Mozilla/Firefox') : ''
};


describe('tests firefox profiles', () => {
  it('should return firefox profiles', () => {
    try {
      const profiles = firefoxProfiles();
      const profile = _.find(profiles, (profile) => profile.Name === 'default');
      expect(firefoxCookiePath()).to.equal(`${PATHS[process.platform]}/${profile.Path}`);
    } catch (err) {
      console.error('Please try running tests as non root user');

      // Intentionally failing the test here
      expect(err).true;
    }
  });
  it('should return firefox profiles', () => {
    try {
      firefoxCookiePath('xxxx');
    } catch (err) {
      expect(err.message).to.equal('xxxx profile not found');
    }
  });
});
