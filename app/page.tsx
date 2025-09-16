'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CareerSection from '../components/CareerSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
useEffect(() => {
  // Nếu bạn có header fixed và muốn bù trừ, chỉnh số này (px)
  const headerOffset = 0; // ví dụ 64

  const onClick = (e: Event) => {
    const a = e.currentTarget as HTMLAnchorElement;
    const hash = a.getAttribute('href') || '';
    if (!hash.startsWith('#') || hash === '#') return;

    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    history.pushState(null, '', hash); // cập nhật URL
  };

  // Gắn handler cho tất cả <a href="#...">
  const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
  anchors.forEach(a => a.addEventListener('click', onClick, { passive: false }));

  return () => anchors.forEach(a => a.removeEventListener('click', onClick));
}, []);



  return (
    <div className="min-h-screen">
      {/* Gán id cho header fixed để lấy offset */}
      {/* <Header id="site-header" />  <-- nếu Header nhận props */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
