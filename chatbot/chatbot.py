# api/chatbot_api.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import random
import json
import spacy
import string
import numpy as np
from nltk.corpus import stopwords
from nltk import word_tokenize
from tensorflow import argmax, convert_to_tensor, float32
from tensorflow.keras.models import load_model
import joblib
import nltk
app = Flask(__name__)
CORS(app)  # Autorise les requêtes cross-origin pour Next.js
nltk.download('punkt_tab')
# Chargez votre modèle et les ressources une fois au démarrage
with open(r"C:\Users\Admin\Desktop\mouzona-main\chatbot\intents_mouzouna.json", "r", encoding="utf-8") as f:
    data = json.load(f)
nltk.download('stopwords')
Stop = stopwords.words('french')
nlp = spacy.load("fr_core_news_md")
label_encoder = joblib.load(r'C:\Users\Admin\Desktop\mouzona-main\chatbot\label_encoder.joblib')
Vectorizer = joblib.load(r'C:\Users\Admin\Desktop\mouzona-main\chatbot\tfidf_vectorizer.joblib')
model = load_model(r'C:\Users\Admin\Desktop\mouzona-main\chatbot\chatbot_model_tf.h5')

def cleaner(sen):
    tokens = word_tokenize(sen.lower())
    tokens = [tok for tok in tokens if tok not in string.punctuation and tok not in Stop]
    doc = nlp(" ".join(tokens))
    lemmas = [tok.lemma_ for tok in doc]
    return " ".join(lemmas)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    cleaned_input = cleaner(user_input)
    vect = Vectorizer.transform([cleaned_input])
    vect_tensor = convert_to_tensor(vect.toarray(), dtype=float32)

    prediction = model.predict(vect_tensor)
    predicted_class = argmax(prediction, axis=1).numpy()[0]
    predicted_intent = label_encoder.inverse_transform([predicted_class])[0]

    for intent in data['intents']:
        if intent['tag'] == predicted_intent:
            answer = random.choice(intent['responses'])
    
    return jsonify({'response': answer})

if __name__ == '__main__':
    app.run(port=5000)