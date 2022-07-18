const { expect } = require('chai');
const path = require('path');
const _ = require('lodash');
const sinon = require('sinon');
const Fs = require('fs');
const firefoxProfiles = require('firefox-profiles');

const firefoxCookiePath = require('../index');

const PATHS = {
  'darwin': (process.platform === 'darwin') ? path.join(process.env.HOME, '/Library/Application Support/Firefox') : '',
  'linux': (process.platform === 'linux') ? path.join(process.env.HOME, '/.mozilla/firefox') : '',
  'win32': (process.platform === 'win32') ? path.join(process.env.APPDATA, '/Mozilla/Firefox') : ''
};


const iniFile = '[Install4F96D1932A9F858E]\nDefault=oucn46hr.default-release\nLocked=1\n\n[Profile1]\n\
  Name=default\nIsRelative=1\nPath=xlbm9r8f.default\nDefault=1\n\n[Profile0]\nName=default-release\nIsRelative=1\nPath=oucn46hr.default-release\n\n[General]\nStartWithLastProfile=1\nVersion=2';

sinon.stub(Fs, 'readFileSync').callsFake((args) => {
  if (args.endsWith('profiles.ini')) {
    return iniFile;
  }
});


describe('tests firefox profiles', () => {
  it('should return firefox profiles', () => {
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
