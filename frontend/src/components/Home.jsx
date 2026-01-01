import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, MapPin, Music, Coffee, Calendar, Users, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { upcomingEvents, drinks, food, openingHours, contactInfo, galleryImages, houseRules } from '../mock';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'food', 'hours', 'location', 'values', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="limes-container">
      {/* Navigation */}
      <nav className="limes-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">LIMES MÜLLEM</div>
            <div className="nav-links">
              <a href="#events" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Konzerte</a>
              <a href="#food" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('food'); }}>Essen & Trinken</a>
              <a href="#hours" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('hours'); }}>Öffnungszeiten</a>
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600" 
            alt="Live music at Limes Müllem"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">PUNK & LIVE-MUCKE IN KÖLN-MÜLHEIM</h1>
            <p className="hero-subtitle">Radical bar. Cheap beers. Loud gigs. Vegane Snacks.</p>
            <p className="hero-address">Mülheimer Freiheit 150, 51063 Köln</p>
            <div className="hero-buttons">
              <Button 
                className="btn-primary" 
                onClick={() => scrollToSection('hours')}
              >
                Komm vorbei
              </Button>
              <Button 
                className="btn-secondary" 
                onClick={() => scrollToSection('events')}
              >
                Nächste Konzerte
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Was ist Limes Müllem?</h2>
              <p className="body-large">
                Limes Müllem ist dein radikal entspanntes Wohnzimmer auf der anderen Rheinseite. 
                Punk- und Linksrock-Bar, Live-Musik-Venue und Café in einem. Klein, laut, 
                politisch, aber nicht anstrengend. Alle willkommen – außer Nazis.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <Music className="feature-icon" />
                  <div>
                    <h4 className="heading-5">Live-Konzerte im kleinen, schwitzigen Wohnzimmer</h4>
                    <p className="body-small">Punk, Hardcore, DIY – mehrmals im Monat</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Coffee className="feature-icon" />
                  <div>
                    <h4 className="heading-5">Veggie & vegane Küche</h4>
                    <p className="body-small">Wechselnde Tagesgerichte, hausgemachte Kuchen & Waffeln</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Users className="feature-icon" />
                  <div>
                    <h4 className="heading-5">Kölsch ab 1,60 €</h4>
                    <p className="body-small">Plus diverse Biere, Mate & faire Preise</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Calendar className="feature-icon" />
                  <div>
                    <h4 className="heading-5">Kicker, Konzerte, Kneipe – alles in einem</h4>
                    <p className="body-small">Dein Nachbarschafts-Hub in Mülheim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">KONZERTE & EVENTS</h2>
            <p className="section-subtitle">
              Konzerte enden um 22:00 Uhr wegen der Nachbar*innen – deshalb früher Einlass. 
              Danach geht's an der Theke weiter.
            </p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="event-card">
                <CardContent className="event-card-content">
                  <div className="event-date">
                    <span className="event-day">{event.dayOfWeek}</span>
                    <span className="event-date-num">{new Date(event.date).getDate()}.{new Date(event.date).getMonth() + 1}</span>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">{event.band}</h3>
                    <p className="event-genre">{event.genre}</p>
                    <p className="event-description">{event.description}</p>
                    <div className="event-meta">
                      <span className="event-time">{event.time} Uhr</span>
                      <span className="event-price">{event.price}</span>
                      {event.soldOut && <Badge variant="destructive">Ausverkauft</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Drinks Section */}
      <section id="food" className="section-food">
        <div className="container">
          <h2 className="section-title">ESSEN & TRINKEN</h2>
          <div className="food-grid">
            <div className="food-column">
              <h3 className="heading-2">Drinks</h3>
              <p className="body-medium">Kölsch, diverses Bier, Longdrinks – keine fancy Cocktail-Show, nur faire Preise.</p>
              <div className="menu-list">
                {drinks.map((drink, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-header">
                      <span className="menu-item-name">{drink.name}</span>
                      <span className="menu-item-price">{drink.price}</span>
                    </div>
                    {drink.description && <p className="menu-item-description">{drink.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="food-column">
              <h3 className="heading-2">Essen / Kuchen</h3>
              <p className="body-medium">Vegetarisch & vegan. Hausgemacht. Wechselndes Mittagsgericht. Kuchen wie bei Oma (nur besser).</p>
              <div className="menu-list">
                {food.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-header">
                      <span className="menu-item-name">
                        {item.name}
                        {item.vegan && <Badge className="vegan-badge">vegan</Badge>}
                      </span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    {item.description && <p className="menu-item-description">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="hours" className="section-hours">
        <div className="container">
          <h2 className="section-title">ÖFFNUNGSZEITEN</h2>
          <div className="hours-grid">
            <div className="hours-column">
              <h3 className="heading-3">BAR</h3>
              <div className="hours-list">
                {openingHours.bar.map((item, index) => (
                  <div key={index} className="hours-item">
                    <span className="hours-day">{item.day}</span>
                    <span className="hours-time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hours-column">
              <h3 className="heading-3">CAFÉ</h3>
              <div className="hours-list">
                {openingHours.cafe.map((item, index) => (
                  <div key={index} className="hours-item">
                    <span className="hours-day">{item.day}</span>
                    <span className="hours-time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="hours-note">Konzerte enden um 22:00 Uhr – danach geht's an der Theke weiter.</p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-location">
        <div className="container">
          <h2 className="section-title">LOCATION</h2>
          <div className="location-content">
            <div className="location-info">
              <div className="location-address">
                <MapPin className="location-icon" size={32} />
                <div>
                  <h3 className="heading-4">Limes Müllem</h3>
                  <p className="body-large">{contactInfo.address.street}</p>
                  <p className="body-large">{contactInfo.address.postalCode} {contactInfo.address.city} – {contactInfo.address.district}</p>
                </div>
              </div>
              <div className="location-directions">
                <h4 className="heading-5">So kommst du hin:</h4>
                <ul className="body-medium">
                  <li>🚊 Straßenbahn Linie 4 → Haltestelle "Mülheimer Freiheit"</li>
                  <li>🚴 Mit dem Rad über die Mülheimer Brücke</li>
                  <li>🚗 Parkplätze in der Nähe (aber besser ÖPNV nutzen)</li>
                </ul>
              </div>
            </div>
            <div className="location-map">
              <iframe
                title="Limes Müllem Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.8!2d${contactInfo.mapCoordinates.lng}!3d${contactInfo.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU3JzM4LjIiTiA3wrAwMScxNy4xIkU!5e0!3m2!1sde!2sde!4v1234567890`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section id="values" className="section-values">
        <div className="container">
          <h2 className="section-title">HAUSREGELN & WERTE</h2>
          <p className="body-large values-intro">
            Limes Müllem ist ein safer space. Wir sind antifaschistisch, antirassistisch, 
            antisexistisch und queer-friendly. Respekt für alle Menschen, keine Toleranz für Intoleranz.
          </p>
          <div className="rules-list">
            {houseRules.map((rule, index) => (
              <div key={index} className="rule-item">
                <span className="rule-bullet">→</span>
                <span className="rule-text">{rule}</span>
              </div>
            ))}
          </div>
          <p className="body-medium values-outro">
            Wir sind ein kleiner DIY-Laden. Unterstütze uns, indem du Konzerte besuchst, 
            Merch kaufst und Freund*innen mitbringst. Danke!
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-gallery">
        <div className="container">
          <h2 className="section-title">IMPRESSIONEN</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.url} alt={image.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div className="container">
          <h2 className="section-title">KONTAKT & BOOKING</h2>
          <div className="contact-grid">
            <div className="contact-info-block">
              <h3 className="heading-3">Get in touch</h3>
              <p className="body-large">
                Du willst bei uns spielen? Hast eine Idee für ein Event? 
                Oder einfach nur Bock zu quatschen? Meld dich!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <a href={`tel:${contactInfo.phone}`} className="link-text">{contactInfo.phone}</a>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <a href={`mailto:${contactInfo.email}`} className="link-text">{contactInfo.email}</a>
                </div>
                <div className="contact-item">
                  <Instagram className="contact-icon" />
                  <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="link-text">@limesmuellem</a>
                </div>
              </div>
            </div>
            <div className="contact-booking">
              <h4 className="heading-4">Booking Anfragen</h4>
              <p className="body-medium">
                Wir suchen vor allem DIY-Bands aus den Bereichen:
              </p>
              <ul className="booking-genres body-medium">
                <li>Punk / Hardcore</li>
                <li>Indie / Alternative Rock</li>
                <li>Post-Punk / Noise</li>
                <li>Politischer Hip-Hop / Spoken Word</li>
              </ul>
              <p className="body-small">
                Schreib uns eine Mail mit Bandinfo, Links zu Musik und deinen Terminen. 
                Wir melden uns!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="heading-4">LIMES MÜLLEM</h3>
              <p className="body-small">Punk, Kölsch & Kicker seit immer.</p>
            </div>
            <div className="footer-links">
              <h4 className="heading-6">Quick Links</h4>
              <a href="#events" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Konzerte</a>
              <a href="#food" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('food'); }}>Speisekarte</a>
              <a href="#values" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('values'); }}>Hausregeln</a>
              <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontakt</a>
            </div>
            <div className="footer-legal">
              <h4 className="heading-6">Legal</h4>
              <a href="#" className="footer-link">Impressum</a>
              <a href="#" className="footer-link">Datenschutzerklärung</a>
            </div>
            <div className="footer-address">
              <h4 className="heading-6">Adresse</h4>
              <p className="body-small">{contactInfo.address.street}</p>
              <p className="body-small">{contactInfo.address.postalCode} {contactInfo.address.city}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="caption">© 2025 Limes Müllem. Made with ❤️ and 🍺 in Köln-Mülheim.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;