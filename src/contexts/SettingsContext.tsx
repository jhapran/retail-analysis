import React, { createContext, useContext, useState, useEffect } from 'react';
import { SystemSetting } from '../types/settings';
import { generateMockSettings } from '../utils/mockSettings';

interface SettingsContextType {
  settings: SystemSetting[];
  updateSetting: (settingId: string, value: string | boolean | number) => void;
  resetSettings: () => void;
  saveSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SystemSetting[]>(() => {
    const savedSettings = localStorage.getItem('appSettings');
    return savedSettings ? JSON.parse(savedSettings) : generateMockSettings();
  });

  const saveSettings = () => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  };

  const updateSetting = (settingId: string, value: string | boolean | number) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === settingId ? { ...setting, value } : setting
      )
    );
  };

  const resetSettings = () => {
    const defaultSettings = generateMockSettings();
    setSettings(defaultSettings);
    localStorage.setItem('appSettings', JSON.stringify(defaultSettings));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, resetSettings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};