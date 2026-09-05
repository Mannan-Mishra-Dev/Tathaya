🔎 Tathya — Fake News & Information Verification Platform

Tathya is a web-based information verification platform designed to help users identify potentially misleading, manipulated, or false information circulating on the internet.

The basic idea is simple: a user provides information they want to verify, and Tathya analyzes it and presents an understandable assessment instead of expecting the user to manually investigate multiple sources.

🎯 Problem Statement

Today, information spreads extremely quickly through platforms like Instagram, YouTube, WhatsApp, Facebook, and news websites. The problem is that users often cannot distinguish between:

Genuine news
Misleading headlines
Edited or manipulated information
Out-of-context claims
Completely fabricated news

Manually verifying every claim is time-consuming and requires checking multiple reliable sources.

Tathya aims to make this verification process faster and easier.

⚙️ How Tathya Works

The workflow can be presented like this:

User Input → Content Extraction → Claim Analysis → Source Verification → Result → Explanation

For example, a user can provide a news article, social-media video link, or text-based claim.

Tathya then processes the available information and evaluates the claim using relevant verification techniques and sources.

The result could be presented with categories such as:

✅ Likely True
⚠️ Misleading / Partially True
❌ Likely False
🔍 Needs Verification

The important part is that Tathya shouldn't simply say "fake" or "real." It should explain why the claim received that assessment and provide supporting evidence wherever possible.

🧠 Key Feature

The main feature of Tathya is claim-based verification.

Instead of treating an entire article or video as simply true or false, the system attempts to identify the actual claim being made and evaluate that claim.

For example:

Claim: "XYZ government has launched a new scheme giving ₹50,000 to every student."

Tathya could identify the claim, search/compare it against reliable sources, and report something like:

Verdict: Misleading
The scheme exists, but the ₹50,000 benefit is not available to every student.

That makes the system much more useful than a simple binary fake-news detector.

💻 Technology

For the initial version, your project can be structured using:

Frontend

HTML
CSS
JavaScript

Backend / Processing

Python
Flask or Django

Data & AI

NLP for extracting and understanding claims
Machine-learning/AI models for classification
External fact-checking and reliable information sources

Database

MySQL / MongoDB, depending on your implementation
🚀 Future Scope

Tathya can eventually be expanded to support:

AI-powered claim extraction
YouTube/social-media content analysis
Image and video misinformation detection
Reverse image verification
Source credibility scoring
Multilingual Indian-language verification
Browser extension for instant verification
Fact-check history and user reports
AI-generated explanation of the verdict
🎤 Short Presentation Version

If someone asks "What is your project?", say:

"Tathya is a web-based information verification platform that aims to help users identify misleading and false information on the internet. Users can submit a news article, social-media link, or textual claim, and the system analyzes the claim, compares it with reliable information sources, and provides a verdict along with an explanation and supporting evidence. The main goal of Tathya is not just to label information as true or false, but to help users understand why a particular claim is considered reliable, misleading, or false."