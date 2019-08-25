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
  it('should return firefox profiles - run tests as non root user', () => {
    const profiles = firefoxProfiles();
    const profile = _.find(profiles, (profile) => profile.Name === 'default');
    expect(firefoxCookiePath()).to.equal(path.join(PATHS[process.platform], profile.Path, 'cookies.sqlite'));
  });
  it('should return firefox profiles', () => {
    try {
      firefoxCookiePath('xxxx');
    } catch (err) {
      expect(err.message).to.equal('xxxx profile not found');
    }
  });
});
