// ACIC-SN - Scripts JavaScript

// Gestion du loader - Affichage uniquement lors de la première visite
(function() {
    const loader = document.getElementById('loader');
    const hasVisited = localStorage.getItem('acic-sn-visited');
    
    // Si l'utilisateur a déjà visité le site, s'assurer que le loader est masqué
    if (hasVisited) {
        if (loader) {
            loader.style.display = 'none';
        }
        return;
    }
    
    // S'assurer que le loader est visible pour la première visite
    if (loader) {
        loader.style.display = 'flex';
    }
    
    // Première visite : afficher le loader
    const minDisplayTime = 3000; // 3 secondes
    const startTime = Date.now();
    let pageLoaded = false;
    
    function hideLoader() {
        if (loader && pageLoaded) {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
            
            setTimeout(function() {
                loader.classList.add('hidden');
                setTimeout(function() {
                    loader.style.display = 'none';
                    // Marquer que l'utilisateur a visité le site
                    localStorage.setItem('acic-sn-visited', 'true');
                }, 500);
            }, remainingTime);
        }
    }
    
    window.onload = function () {
        pageLoaded = true;
        hideLoader();
    };
    
    // Sécurité : masquer après 10 secondes maximum
    setTimeout(function() {
        if (loader && loader.style.display !== 'none') {
            pageLoaded = true;
            hideLoader();
        }
    }, 10000);
})();

// Menu mobile et détection de la page active
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Fermer le menu au clic sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Détection automatique de la page active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validation des formulaires
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#C4161C';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    // Validation email
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value && !emailRegex.test(field.value)) {
            isValid = false;
            field.style.borderColor = '#C4161C';
        }
    });
    
    return isValid;
}

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Récupérer les valeurs du formulaire
                const nom = encodeURIComponent(this.querySelector('#nom').value);
                const entreprise = encodeURIComponent(this.querySelector('#entreprise').value || '');
                const email = encodeURIComponent(this.querySelector('#email').value);
                const telephone = encodeURIComponent(this.querySelector('#telephone').value || '');
                const sujet = encodeURIComponent(this.querySelector('#sujet').value);
                const message = encodeURIComponent(this.querySelector('#message').value);
                
                // Construire le corps de l'email
                let emailBody = "Nom: " + nom + "\n";
                if (entreprise) emailBody += "Entreprise: " + entreprise + "\n";
                emailBody += "Email: " + email + "\n";
                if (telephone) emailBody += "Téléphone: " + telephone + "\n";
                emailBody += "\nSujet: " + sujet + "\n\n";
                emailBody += "Message:\n" + message;
                
                // Créer le lien mailto
                const mailtoLink = "mailto:asicsn@live.fr?subject=" + encodeURIComponent("Contact depuis le site ACIC-SN: " + sujet) + "&body=" + encodeURIComponent(emailBody);
                
                // Ouvrir le client email
                window.location.href = mailtoLink;
                
                // Afficher un message de confirmation
                setTimeout(function() {
                    alert('Votre client de messagerie va s\'ouvrir. Si ce n\'est pas le cas, envoyez-nous un email à asicsn@live.fr avec les informations du formulaire.');
                }, 500);
            } else {
                alert('Veuillez remplir tous les champs obligatoires correctement.');
            }
        });
    }
});

// Gestion du formulaire de devis
document.addEventListener('DOMContentLoaded', function() {
    const devisForm = document.getElementById('devis-form');
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Récupérer les valeurs du formulaire
                const entreprise = encodeURIComponent(this.querySelector('#entreprise-devis').value);
                const contact = encodeURIComponent(this.querySelector('#contact-devis').value);
                const telephone = encodeURIComponent(this.querySelector('#telephone-devis').value);
                const email = encodeURIComponent(this.querySelector('#email-devis').value);
                const domaine = encodeURIComponent(this.querySelector('#domaine-activite').value);
                const produits = encodeURIComponent(this.querySelector('#produits-concernes').value);
                const message = encodeURIComponent(this.querySelector('#message-devis').value);
                
                // Construire le corps de l'email
                let emailBody = "=== DEMANDE DE DEVIS ===\n\n";
                emailBody += "INFORMATIONS DE CONTACT:\n";
                emailBody += "Entreprise: " + entreprise + "\n";
                emailBody += "Contact: " + contact + "\n";
                emailBody += "Téléphone: " + telephone + "\n";
                emailBody += "Email: " + email + "\n\n";
                emailBody += "DÉTAILS DE LA DEMANDE:\n";
                emailBody += "Domaine d'activité: " + domaine + "\n";
                emailBody += "Produits concernés: " + produits + "\n\n";
                emailBody += "MESSAGE:\n" + message;
                
                // Créer le lien mailto
                const mailtoLink = "mailto:asicsn@live.fr?subject=" + encodeURIComponent("Demande de devis - " + entreprise) + "&body=" + encodeURIComponent(emailBody);
                
                // Ouvrir le client email
                window.location.href = mailtoLink;
                
                // Afficher un message de confirmation
                setTimeout(function() {
                    alert('Votre client de messagerie va s\'ouvrir. Si ce n\'est pas le cas, envoyez-nous un email à asicsn@live.fr avec les informations du formulaire.');
                }, 500);
            } else {
                alert('Veuillez remplir tous les champs obligatoires correctement.');
            }
        });
    }
});

// Animation au scroll optimisée
const observerOptions = {
    threshold: 0.3, // L'élément doit être visible à 30% avant de déclencher
    rootMargin: '0px 0px -150px 0px' // Marge négative pour déclencher quand l'élément est bien visible
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Pour les éléments avec fade-in-up, ajouter la classe animated
            if (entry.target.classList.contains('fade-in-up')) {
                entry.target.classList.add('animated');
            } else {
                // Pour les autres éléments, appliquer directement les styles
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
            // Ne plus observer une fois animé
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    // Observer tous les éléments avec fade-in-up
    const fadeInElements = document.querySelectorAll('.fade-in-up');
    fadeInElements.forEach((el) => {
        observer.observe(el);
    });
    
    // Observer les autres éléments à animer
    const animateElements = document.querySelectorAll('.card:not(.fade-in-up), .news-card, .brand-item, .testimonial-card, .stat-item');
    animateElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Animation pour le hero (immédiate)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});
