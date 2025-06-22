# from flask import Blueprint, request, jsonify
# # from backend.utils.languageHandler import translate_to_english
# from utils.languageHandler import translate_to_english
# profile_bp = Blueprint('profile_bp', __name__)

# @profile_bp.route("/generate-profile", methods=["POST"])
# def generate_profile():
#     data = request.json
#     local_input = data.get("input", "")

#     # Simulate language translation
#     english_input = translate_to_english(local_input)

#     # Dummy AI response
#     profile = {
#         "name": "Hunar Freelancer",
#         "skills": "Mehndi, Food Services, Poster Designing",
#         "bio": f"An expert in {english_input}. Experienced in working with clients on social platforms.",
#         "proposal": f"Hello! I specialize in {english_input}. Looking forward to working with you."
#     }

#     return jsonify(profile)





from flask import Blueprint, request, jsonify
from utils.languageHandler import translate_to_english, extract_skills

profile_bp = Blueprint('profile_bp', __name__)

@profile_bp.route("/generate-profile", methods=["POST"])
def generate_profile():
    data = request.json
    local_input = data.get("input", "")

    # Translate and Extract
    english_input = translate_to_english(local_input)
    skills = extract_skills(local_input)

    # Generate profile
    profile = {
        "name": "Hunar Freelancer",
        "skills": skills,
        "bio": f"An expert in {english_input}. Experienced in working with clients on social platforms.",
        "proposal": f"Hello! I specialize in {english_input}. Looking forward to working with you."
    }

    return jsonify(profile)
