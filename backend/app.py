




# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import latex
# import os

# app = Flask(__name__)
# CORS(app)

# def _add_cors_headers(response):
#     response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5174'  # Specific origin
#     response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
#     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
#     response.headers['Access-Control-Max-Age'] = '86400'  # Cache preflight for 24 hours
#     return response

# @app.route('/generate-gig', methods=['POST', 'OPTIONS'])
# def generate_gig():
#     if request.method == 'OPTIONS':
#         response = jsonify({'message': 'CORS preflight'})
#         return _add_cors_headers(response), 200
#     data = request.json
#     input_text = data.get("input", "").lower()

#     # Enhanced keyword mapping
#     if "capcut" in input_text or "reels" in input_text or "video" in input_text:
#         gig = {
#             "name": "Hunar Freelancer",
#             "title": "Trendy Reels Editor for Instagram and YouTube Shorts",
#             "bio": "I create viral and aesthetic reels with transitions, sync, and captions.",
#             "proposal": "Hi, I’d love to edit your reels! I’ll deliver fast and trendy content to grow your page.",
#             "tags": ["Video Editing", "Reels", "CapCut"]
#         }
#     elif "mehndi" in input_text:
#         gig = {
#             "name": "Hunar Freelancer",
#             "title": "Mehndi Design for Weddings and Festivals",
#             "bio": "I create intricate and custom mehndi designs for brides and special occasions.",
#             "proposal": "Contact me for custom mehndi designs tailored to your event!",
#             "tags": ["Mehndi Design", "Henna Art", "Weddings"]
#         }
#     else:
#         gig = {
#             "name": "Hunar Freelancer",
#             "title": "Freelance Services",
#             "bio": f"I offer my skills in: {input_text}. Contact me for more!",
#             "proposal": "Available for custom work in your preferred language!",
#             "tags": ["Local Skill", "Freelance", "Hunarify"]
#         }

#     response = jsonify(gig)
#     return _add_cors_headers(response)

# @app.route('/download-pdf', methods=['POST', 'OPTIONS'])
# def download_pdf():
#     if request.method == 'OPTIONS':
#         response = jsonify({'message': 'CORS preflight'})
#         return _add_cors_headers(response), 200
#     data = request.json
#     gig = data.get("gig", {})
    
#     # Generate LaTeX content
#     latex_content = r"""
#     \documentclass[a4paper,12pt]{article}
#     \usepackage[utf8]{inputenc}
#     \usepackage[T1]{fontenc}
#     \usepackage{geometry}
#     \geometry{a4paper, margin=1in}
#     \usepackage{times} % Reliable font
#     \usepackage{amsmath, amssymb}

#     \title{\textbf{Gig Profile}}
#     \author{}
#     \date{}

#     \begin{document}

#     \maketitle

#     % Describing the plan for creating the gig profile section
#     % Including name, title, bio, proposal, and tags
#     \section*{Gig Details}
#     \textbf{Name:} {name} \\
#     \textbf{Gig Title:} {title} \\
#     \textbf{Bio:} {bio} \\
#     \textbf{Proposal:} {proposal} \\
#     \textbf{Tags:} {tags}

#     \end{document}
#     """.format(
#         name=gig.get("name", "Hunar Freelancer"),
#         title=gig.get("title", "Untitled Gig"),
#         bio=gig.get("bio", "No bio available"),
#         proposal=gig.get("proposal", "No proposal available"),
#         tags=", ".join(gig.get("tags", []))
#     )

#     # Write LaTeX to a temporary file
#     with open("gig_profile.tex", "w") as f:
#         f.write(latex_content)

#     # Compile LaTeX to PDF
#     try:
#         latex.build_pdf("gig_profile.tex")
#         with open("gig_profile.pdf", "rb") as pdf_file:
#             pdf_data = pdf_file.read()
#         os.remove("gig_profile.tex")
#         os.remove("gig_profile.pdf")
#         return pdf_data, 200, {"Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=gig_profile.pdf"}
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/send-whatsapp-job', methods=['POST', 'OPTIONS'])
# def send_whatsapp_job():
#     if request.method == 'OPTIONS':
#         response = jsonify({'message': 'CORS preflight'})
#         return _add_cors_headers(response), 200
#     data = request.json
#     gig = data.get("gig", {})
#     message = f"New Job Match!\nTitle: {gig.get('title', 'Untitled')}\nBio: {gig.get('bio', 'No bio')}\nTags: {', '.join(gig.get('tags', []))}"
#     print(f"WhatsApp Mock: {message}")  # Log for demo
#     response = jsonify({"status": "success", "message": "Job sent to WhatsApp (mock)"})
#     return _add_cors_headers(response)

# if __name__ == "__main__":
#     app.run(debug=True, host='0.0.0.0', port=5000)





from flask import Flask, request, jsonify
from flask_cors import CORS
import latex
import os

app = Flask(__name__)
# CORS(app, origins=["http://localhost:5173"])  # ✅ Allow your frontend origin
CORS(app, origins=[
    "http://localhost:5173",
    "https://codeclash2-0.vercel.app"
])


@app.route('/generate-gig', methods=['POST'])
def generate_gig():
    input_text = request.json.get("input", "")

    if "mehndi" in input_text.lower():
        gig = {
            "name": "Hunar Freelancer",
            "title": "Mehndi Design for Weddings and Festivals",
            "bio": "I create intricate and custom mehndi designs for brides and special occasions.",
            "proposal": "Contact me for custom mehndi designs tailored to your event!",
            "tags": ["Mehndi Design", "Henna Art", "Weddings"]
        }
    elif "edit" in input_text.lower():
        gig = {
            "name": "Hunar Freelancer",
            "title": "Trendy Reels Editor for Instagram and YouTube Shorts",
            "bio": "I create viral and aesthetic reels with transitions, sync, and captions.",
            "proposal": "Hi, I’d love to edit your reels! I’ll deliver fast and trendy content to grow your page.",
            "tags": ["Video Editing", "Reels", "CapCut"]
        }
    else:
        gig = {
            "name": "Hunar Freelancer",
            "title": "Freelance Services",
            "bio": f"I offer my skills in: {input_text}. Contact me for more!",
            "proposal": "Available for custom work in your preferred language!",
            "tags": ["Local Skill", "Freelance", "Hunarify"]
        }

    return jsonify(gig)

@app.route('/download-pdf', methods=['POST'])
def download_pdf():
    data = request.json
    gig = data.get("gig", {})

    latex_content = r"""
    \documentclass[a4paper,12pt]{article}
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
    \usepackage{geometry}
    \geometry{a4paper, margin=1in}
    \usepackage{times}
    \usepackage{amsmath, amssymb}

    \title{\textbf{Gig Profile}}
    \author{}
    \date{}

    \begin{document}

    \maketitle

    \section*{Gig Details}
    \textbf{Name:} {name} \\
    \textbf{Gig Title:} {title} \\
    \textbf{Bio:} {bio} \\
    \textbf{Proposal:} {proposal} \\
    \textbf{Tags:} {tags}

    \end{document}
    """.format(
        name=gig.get("name", "Hunar Freelancer"),
        title=gig.get("title", "Untitled Gig"),
        bio=gig.get("bio", "No bio available"),
        proposal=gig.get("proposal", "No proposal available"),
        tags=", ".join(gig.get("tags", []))
    )

    with open("gig_profile.tex", "w") as f:
        f.write(latex_content)

    try:
        latex.build_pdf("gig_profile.tex")
        with open("gig_profile.pdf", "rb") as pdf_file:
            pdf_data = pdf_file.read()
        os.remove("gig_profile.tex")
        os.remove("gig_profile.pdf")
        return pdf_data, 200, {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=gig_profile.pdf"
        }
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/send-whatsapp-job', methods=['POST'])
def send_whatsapp_job():
    data = request.json
    gig = data.get("gig", {})
    message = f"New Job Match!\nTitle: {gig.get('title', 'Untitled')}\nBio: {gig.get('bio', 'No bio')}\nTags: {', '.join(gig.get('tags', []))}"
    print(f"WhatsApp Mock: {message}")
    return jsonify({"status": "success", "message": "Job sent to WhatsApp (mock)"})

@app.route("/post-job", methods=["POST"])
def post_job():
    data = request.json
    print("Job Received:", data)
    return jsonify({"message": "Job posted successfully!"})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
