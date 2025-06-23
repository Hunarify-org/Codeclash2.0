from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow all origins (development) or restrict as needed
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/generate-gig', methods=['POST'])
def generate_gig():
    data = request.json
    input_text = data.get("input", "")

    if "mehndi" in input_text.lower():
        gig = {
            "title": "Mehndi Design for Weddings and Festivals",
            "bio": "I create intricate and custom mehndi designs for brides and special occasions.",
            "tags": ["Mehndi Design", "Henna Art", "Weddings"]
        }
    elif "video" in input_text.lower():
        gig = {
            "title": "Video Editing Services",
            "bio": "I edit short videos, reels, and promotional content for social media platforms.",
            "tags": ["Video Editing", "Reels", "Promo"]
        }
    else:
        gig = {
            "title": "Freelance Services",
            "bio": f"I offer my skills in: {input_text}. Contact me for more!",
            "tags": ["Local Skill", "Freelance", "Hunarify"]
        }

    return jsonify(gig)

@app.route("/post-job", methods=["POST"])
def post_job():
    data = request.json
    print("Job Received:", data)
    return jsonify({"message": "Job posted successfully!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
