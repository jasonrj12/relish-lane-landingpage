# 🎨 Theme System Guide - RelishLane

## Overview
RelishLane features an intelligent **auto-detecting theme system** that automatically adapts to your system preferences on first visit, then lets you manually toggle between light and dark modes!

---

## 🌟 Features

### **Smart Theme Detection**

**☀️ Light Mode**
   - Clean, bright interface
   - Optimized for daytime viewing
   - Enhanced readability with high contrast

**🌙 Dark Mode**
   - Easy on the eyes
   - Perfect for evening browsing
   - Reduces eye strain in low-light conditions

**🤖 Auto-Detection**
   - On first visit, automatically detects your system's theme preference
   - No configuration needed - works right out of the box
   - After first toggle, remembers your manual preference

---

## 🔄 How to Switch Themes

### Method 1: Click the Icon
Click the theme toggle button in the header navigation:
- 🌙 **Moon Icon** = Click to switch to Dark Mode
- ☀️ **Sun Icon** = Click to switch to Light Mode

Simple toggle: **Light ↔ Dark**

### Method 2: Keyboard Shortcut ⌨️
Press **`Ctrl + Shift + L`** (Windows/Linux) or **`Cmd + Shift + L`** (Mac)

---

## 💾 Persistence

Your theme preference is automatically saved and will be remembered:
- Across browser sessions
- After closing and reopening the site
- Even after clearing cache (stored in localStorage)

---

## 🔧 Technical Details

### Auto-Detection on First Visit
On your first visit, the theme will:
- ✅ Automatically detect your OS preference
- ✅ Apply the matching theme instantly
- ✅ Work on all modern browsers

### Manual Control
After you toggle the theme:
- ✅ Your preference overrides system settings
- ✅ Choice is saved in localStorage
- ✅ Works independently from OS theme

### System Detection
The theme system uses:
- `prefers-color-scheme` media query for initial detection
- localStorage for persistence
- Clean, simple toggle mechanism

### Smooth Transitions
All theme switches include:
- 300ms smooth color transitions
- Toast notifications showing current mode
- No flash of unstyled content (FOUC)
- Optimized performance

---

## 🎯 Best Practices

**For Daytime Use:**
- Light Mode is automatically applied if your system uses light theme
- Better for reading detailed content
- Optimal for bright environments

**For Evening/Night Use:**
- Dark Mode is automatically applied if your system uses dark theme
- Reduces blue light exposure
- Better for low-light environments

**First Visit:**
- Theme automatically matches your system preference
- No setup required!

---

## 🌐 Browser Compatibility

✅ **Fully Supported:**
- Chrome/Edge 76+
- Firefox 67+
- Safari 12.1+
- Opera 62+

⚠️ **Partial Support:**
- Older browsers will default to Light Mode
- Manual theme switching still works

---

## 📱 Mobile Support

The theme system works perfectly on mobile devices:
- Touch-friendly toggle button
- System theme detection on iOS/Android
- Responsive toast notifications
- Native feel and performance

---

## 🎨 Color Palette

### Light Mode
- Background: White, Amber-50
- Text: Gray-900, Gray-600
- Accents: Primary (#8B4513), Accent (#FF8C00)

### Dark Mode
- Background: Gray-900, Gray-800
- Text: White, Gray-300
- Accents: Accent (#FF8C00), Orange-400

---

## 🚀 Quick Start

1. **Visit the site** - Theme auto-detects your preference
2. **Click the theme icon** - Located in the header
3. **Enjoy your preferred mode** - Setting is saved automatically

---

## 💡 Pro Tips

- **Keyboard shortcut:** Press `Ctrl/Cmd + Shift + L` for quick toggling
- **Hover tooltip:** Shows current mode and keyboard shortcut
- **Toast notifications:** Confirms each theme change
- **Auto mode:** Best for 24/7 optimal viewing experience

---

## 🐛 Troubleshooting

**Theme not switching?**
- Try hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R`)
- Clear browser cache if issues persist
- Check if JavaScript is enabled

**System theme not detected on first visit?**
- Ensure browser is up to date
- Check browser permissions
- You can always manually toggle using the icon

---

## 📝 Development Notes

**For Developers:**
- Theme context: `/src/context/DarkModeContext.jsx`
- Theme toggle: `/src/components/Header.jsx`
- Toast component: `/src/components/ThemeToast.jsx`
- Tailwind config: Dark mode enabled with `class` strategy

**Adding dark mode to new components:**
```jsx
// Example usage
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Your content here
</div>
```

---

Made with ❤️ for RelishLane
