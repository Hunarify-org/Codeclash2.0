# from flask import Flask
# from flask_cors import CORS
# # from backend.routes.profileGenerator import profile_bp
# from routes.profileGenerator import profile_bp
# app = Flask(__name__)
# CORS(app)

# # Register route
# app.register_blueprint(profile_bp)

# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/generate-gig', methods=['POST'])
# def generate_gig():
#     data = request.json
#     input_text = data.get("input", "")
    
#     # Dummy response
#     response = {
#         "title": "Mehndi Design for Weddings and Festivals",
#         "bio": "I create intricate and custom mehndi designs for brides and special occasions.",
#         "tags": ["Mehndi Design", "Henna Art", "Weddings"]
#     }
#     return jsonify(response)

# if __name__ == '__main__':
#     app.run(debug=True)






from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-gig', methods=['POST'])
def generate_gig():
    data = request.json
    input_text = data.get("input", "")

    # Simple keyword mapping
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

if __name__ == "__main__":
    app.run(debug=True)
