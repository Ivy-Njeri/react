import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [theme, setTheme] = useState("romantic");
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggle2FA = () => setTwoFactorAuth(!twoFactorAuth);

  return (
    <div className={`min-h-screen px-6 py-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-pink-600">Settings 💖</h2>

        {/* Profile Picture Upload */}
        <div className="space-y-2">
          <label className="block font-semibold">Update Profile Picture</label>
          <input type="file" className="block w-full border rounded-md p-2" />
        </div>

        {/* Change Email */}
        <div className="space-y-2">
          <label className="block font-semibold">Email</label>
          <input type="email" placeholder="Change email" className="w-full border p-2 rounded-md" />
        </div>

        {/* Change Password */}
        <div className="space-y-2">
          <label className="block font-semibold">Password</label>
          <input type="password" placeholder="New password" className="w-full border p-2 rounded-md" />
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">Two-Factor Authentication (2FA)</span>
          <Switch
            checked={twoFactorAuth}
            onChange={toggle2FA}
            className={`${twoFactorAuth ? 'bg-pink-500' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable 2FA</span>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${twoFactorAuth ? 'translate-x-6' : 'translate-x-1'}`} />
          </Switch>
        </div>

        {/* Notification Preferences */}
        <div className="space-y-2">
          <label className="block font-semibold">Notifications</label>
          <select className="w-full border p-2 rounded-md">
            <option>Email & Push</option>
            <option>Email Only</option>
            <option>Push Only</option>
            <option>None</option>
          </select>
        </div>

        {/* Language and Region */}
        <div className="space-y-2">
          <label className="block font-semibold">Language / Region</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full border p-2 rounded-md">
            <option value="en">English (US)</option>
            <option value="sw">Swahili (KE)</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Theme Selector */}
        <div className="space-y-2">
          <label className="block font-semibold">Theme Style</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full border p-2 rounded-md">
            <option value="romantic">💖 Romantic</option>
            <option value="elegant">✨ Elegant</option>
          </select>
        </div>

        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">Dark Mode</span>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={`${darkMode ? 'bg-gray-700' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
          </Switch>
        </div>

        {/* Deactivate Account */}
        <div className="pt-6 border-t">
          <h3 className="font-bold text-red-600">Danger Zone</h3>
          <button className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
