# def translate_to_english(local_text):
#     # For now, just return same text with dummy prefix
#     return f"(translated) {local_text}"





def translate_to_english(local_text):
    # Simulated translation
    return f"(translated) {local_text}"

def extract_skills(user_input):
    known_skills = {
        "mehndi": "Mehndi",
        "video": "Video Editing",
        "edit": "Video Editing",
        "khana": "Cooking",
        "cook": "Cooking",
        "poster": "Poster Designing",
        "design": "Poster Designing",
        "painting": "Painting",
        "dance": "Dancing",
        "craft": "Handicrafts",
        "music": "Music",
        "photo": "Photography",
    }
    
    skills = [skill for keyword, skill in known_skills.items() if keyword in user_input.lower()]
    return ", ".join(set(skills)) if skills else "General Freelancing"
