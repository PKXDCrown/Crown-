const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("show"));
});

// Copy hashtag
const copyHashtagBtn = document.getElementById("copyHashtag");
copyHashtagBtn?.addEventListener("click", async () => {
  const text = document.getElementById("hash")?.textContent || "#PKXDCrown";
  await navigator.clipboard.writeText(text);
  copyHashtagBtn.textContent = "Copiado!";
  setTimeout(() => (copyHashtagBtn.textContent = "Copiar hashtag"), 1200);
});

// FAQ accordion
document.querySelectorAll(".q").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-faq");
    const ans = document.getElementById(`faq-${id}`);
    const isOpen = ans.style.display === "block";
    document.querySelectorAll(".a").forEach(a => (a.style.display = "none"));
    ans.style.display = isOpen ? "none" : "block";
  });
});

// Form -> generate message
const form = document.getElementById("form");
const out = document.getElementById("out");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const nick = document.getElementById("nick").value.trim();
  const tema = document.getElementById("tema").value.trim();
  const obra = document.getElementById("obra").value.trim();
  const link = document.getElementById("link").value.trim();
  const desc = document.getElementById("desc").value.trim();

  const lines = [];
  lines.push("👑 INSCRIÇÃO — PKXD CROWN");
  lines.push(`• Nick: ${nick}`);
  lines.push(`• Obra: ${obra}`);
  if (tema) lines.push(`• Tema: ${tema}`);
  if (link) lines.push(`• Link: ${link}`);
  if (desc) lines.push(`• Descrição: ${desc}`);
  lines.push("");
  lines.push("#PKXDCrown");

  out.textContent = lines.join("\n");
});

document.getElementById("clearBtn")?.addEventListener("click", () => {
  form.reset();
  out.textContent = "Preencha o formulário para gerar a inscrição.";
});

// Copy output
document.getElementById("copyOut")?.addEventListener("click", async () => {
  const text = out.textContent;
  await navigator.clipboard.writeText(text);
  const btn = document.getElementById("copyOut");
  btn.textContent = "Copiado!";
  setTimeout(() => (btn.textContent = "Copiar"), 1200);
});
