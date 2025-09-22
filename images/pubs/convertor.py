from pdf2image import convert_from_path
import sys

if len(sys.argv) < 3:
    print("用法: python pdf2png.py input.pdf output.png")
    sys.exit(1)

input_pdf = sys.argv[1]
output_png = sys.argv[2]

images = convert_from_path(input_pdf, dpi=300)
for i, img in enumerate(images):
    outname = output_png.replace(".png", f"-{i}.png")
    img.save(outname, "PNG")
    print(f"保存 {outname}")