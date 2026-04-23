# Job Search System - Quick Reference Card

## 🚀 **ONE-TIME SETUP**

```bash
cd job_search_system
pip install -r requirements.txt
cp .env.example .env
# Edit .env with Gmail App Password from: https://myaccount.google.com/apppasswords
```

---

## ⚡ **MOST USED COMMANDS**

```bash
# 1. Analyze your resume
python main.py --analyze-resume

# 2. Get optimization insights
python main.py --optimize

# 3. Collect 20 new contacts
python main.py --collect-contacts 20

# 4. Check database stats
python main.py --stats

# 5. Test emails (safe - no real sending)
python main.py --send-now

# 6. Send real emails (LIVE MODE)
python main.py --send-now --live

# 7. Export Excel report
python main.py --export-report

# 8. Start daily automation
python main.py --start-automation
```

---

## 📊 **TYPICAL WORKFLOW**

### **Day 1: Setup & Test**
```bash
# Install & configure
./setup.sh

# Analyze resume
python main.py --analyze-resume

# Get insights
python main.py --optimize

# Collect test batch
python main.py --collect-contacts 10

# Review emails (dry run)
python main.py --send-now

# Export to Excel
python main.py --export-report
# Review: data/contacts_report_*.xlsx
```

### **Day 2: First Real Sends**
```bash
# Collect more contacts
python main.py --collect-contacts 50

# Send test batch (5 emails)
# First edit CSV to keep only 5 contacts as "Pending"
python main.py --send-now --live

# Monitor responses
# Adjust templates if needed
```

### **Day 3+: Full Automation**
```bash
# Enable daily automation
python main.py --start-automation

# Runs automatically:
# - 9:00 PM: Scrape 30 new contacts
# - 8:30 AM: Send 30 emails

# Monitor weekly:
python main.py --stats
python main.py --export-report
```

---

## 📁 **KEY FILES**

| File | Purpose |
|------|---------|
| `data/contacts.csv` | Contact database |
| `data/contacts_report_*.xlsx` | Excel reports |
| `logs/job_search.log` | System logs |
| `.env` | Your email credentials |
| `config.py` | System settings |

---

## 🎯 **QUICK TIPS**

### **Before Going Live**
- [ ] Test dry-run mode first
- [ ] Review generated emails
- [ ] Check Excel report quality
- [ ] Start with 5-10 test emails
- [ ] Monitor responses

### **Email Quality**
- ✅ Personalized (name, title, company)
- ✅ Professional tone
- ✅ Clear value proposition
- ✅ Visa status mentioned
- ✅ Call to action

### **Best Practices**
- 📧 Send 8:30 AM Tue-Thu (best times)
- 🎯 Quality > quantity
- 📊 Track responses weekly
- 🔄 Adjust based on feedback
- 💼 Connect on LinkedIn too

---

## 🔧 **TROUBLESHOOTING**

### **"SMTP Authentication Error"**
```bash
# Use App Password, not regular Gmail password
# Generate at: https://myaccount.google.com/apppasswords
# Update .env file
```

### **"No pending emails"**
```bash
# Collect contacts first
python main.py --collect-contacts 20
python main.py --stats
```

### **"Module not found"**
```bash
# Install dependencies
pip install -r requirements.txt
```

### **Check Logs**
```bash
# View recent logs
tail -50 logs/job_search.log

# Search for errors
grep ERROR logs/job_search.log
```

---

## 📊 **EXPECTED METRICS**

### **Week 1**
- Contacts: ~100
- Emails: ~150
- Responses: 5-15
- Interviews: 1-3

### **Month 1**
- Contacts: ~600
- Emails: ~900
- Responses: 50-150
- Interviews: 5-25
- Offers: 0-2

### **Response Rates**
- Overall: 5-15%
- Recruiters: 10-20%
- Hiring Managers: 5-10%
- Directors/VPs: 3-8%

---

## ⚙️ **CUSTOMIZATION**

### **Change Email Template**
Edit `email_generator.py` → `_get_body()` method

### **Adjust Rate Limits**
Edit `.env`:
```env
MAX_EMAILS_PER_DAY=50
EMAIL_DELAY_SECONDS=20
```

### **Change Schedule**
Edit `.env`:
```env
SEND_TIME=09:00
SCRAPE_TIME=22:00
```

### **Add More Companies**
Edit `config.py` → `H1B_SPONSOR_COMPANIES` list

---

## 🎓 **YOUR PROFILE**

**Akash Vilas Parthe**  
MSBA @ Carnegie Mellon University  
3+ years Business Analyst experience  
SQL • Python • Power BI • Azure • Databricks  

**Achievements:**  
40% cost reduction | $5M+ visibility | 90% efficiency gain

**Target:**  
Business Analyst | Product Analyst | Data Analyst  
H1B/OPT sponsorship required

---

## 📞 **HELP & SUPPORT**

| Question | See |
|----------|-----|
| How to install? | QUICKSTART.md |
| How does it work? | SYSTEM_OVERVIEW.md |
| Full documentation | README.md |
| Command help | `python main.py --help` |

---

## ✅ **SAFETY CHECKLIST**

- [x] Dry-run mode default (safe)
- [x] Rate limiting (30/day)
- [x] Email delays (15s)
- [x] Deduplication
- [x] Public data only
- [x] No login scraping
- [x] Professional emails
- [x] Visa status clear

---

## 🚀 **LAUNCH CHECKLIST**

**Setup:**
- [ ] Dependencies installed
- [ ] `.env` configured
- [ ] Gmail App Password added
- [ ] System tested (dry run)

**Quality:**
- [ ] Resume data verified
- [ ] Email templates reviewed
- [ ] Excel report checked
- [ ] Sample emails look good

**Ready:**
- [ ] Sent 5-10 test emails
- [ ] Monitored responses
- [ ] Templates adjusted
- [ ] Ready for automation

---

## 💡 **PRO TIPS**

1. **Start small**: 5-10 test emails first
2. **Review daily**: Check responses and adjust
3. **Personalize**: Customize for best results
4. **Follow up**: Track and follow up after 1 week
5. **Network**: Connect on LinkedIn too
6. **A/B test**: Try different subject lines
7. **Track metrics**: Response rate, interview rate

---

**Quick Start**: `python main.py --analyze-resume`

**Full Guide**: See `QUICKSTART.md`

**Support**: Check `README.md` or `logs/job_search.log`

---

**System Status**: ✅ Ready to Launch

**Location**: `job_search_system/`

**Good luck! 🎯**
