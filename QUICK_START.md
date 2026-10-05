# Quick Start Guide

## Option 1: Local Machine

### Prerequisites
- Node.js installed
- Ollama installed from https://ollama.com

### Steps

```bash
# 1. Clone repo
git clone https://github.com/yibdsthvsthv-cmyk/HiggsfIld-
cd HiggsfIld-

# 2. Install dependencies
npm install

# 3. Terminal 1 - Start Ollama
ollama pull llama3.2
ollama serve

# 4. Terminal 2 - Start app
npm start

# 5. Open browser
http://localhost:3000
```

---

## Option 2: GitHub Codespace (Easiest)

### Steps

1. **Create Codespace**
   - Go to: https://github.com/yibdsthvsthv-cmyk/HiggsfIld-
   - Click **Code** → **Codespaces** → **Create codespace on main**
   - Wait for environment setup (npm install auto runs)

2. **Open Terminal Tabs (3 terminals)**

   **Tab 1 - Ollama:**
   ```bash
   ollama serve
   ```
   (Keep running)

   **Tab 2 - Download Model:**
   ```bash
   ollama pull llama3.2
   ```

   **Tab 3 - Start App:**
   ```bash
   npm start
   ```

3. **Access App**
   - GitHub will notify you when port 3000 is ready
   - Click "Open in Browser" or
   - Go to **Ports** tab → Click port 3000

4. **Using the App**
   - Enter code request in textarea
   - Select language
   - Click "Generate Code"
   - Copy generated code with "Copy" button

---

## Option 3: Docker (Advanced)

```bash
docker-compose up
```

---

## Troubleshooting

### "Cannot connect to Ollama"
- Make sure `ollama serve` is running in Tab 1
- Check: `curl http://localhost:11434/api/tags`

### "Model not found"
```bash
ollama pull llama3.2
```

### "Port 3000 already in use"
```bash
lsof -i :3000
kill -9 <PID>
npm start
```

### "Generator not responding"
- Wait 10-15 seconds (first request is slow)
- Check browser console for errors (F12)
- Restart app: `npm start`

---

## Features

✅ Free AI (no API key)  
✅ Local execution  
✅ Multiple languages  
✅ Copy button  
✅ Works in Codespace  

## Support

Have issues? Create GitHub issue: https://github.com/yibdsthvsthv-cmyk/HiggsfIld-/issues

---

**Ready to code? Start now!**
