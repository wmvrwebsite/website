import React, { useState } from 'react';
import '../assets/CSS/BoardMembers.css';
import President from '../assets/Images/deanbm.webp';
import Treasurer from '../assets/Images/dean.webp';
import Secretary from '../assets/Images/tonia.webp';
import PropertyManager from '../assets/Images/kevin.webp';
import Therapist from '../assets/Images/sean.webp';
import Director from '../assets/Images/chris.webp';

const boardMembers = [
  {
    title: 'President',
    name: 'Dean DeCanter',
    bio: 'I need a Bio',
    photo: President,
  },
  {
    title: 'Treasurer',
    name: 'Rebecca DeCanter',
    bio: 'I need a Bio',
    photo: Treasurer,
  },
  {
    title: 'Secretary',
    name: 'Tonia Tollie',
    bio: (
      <>
      <p>My name is Tonia Jollie. I am a proud Veteran wife and mother of two. I am a lifelong resident of Newaygo County and enjoy the outdoors, spending time with my family, hiking , camping and serving our community. I have worked in the healthcare field for over 15 years.</p>
      <p>I am a part of WMVR because I strongly believe that we owe so much to all of those who have served and fought for our freedom. I look forward to helping grow this wonderful organization for our Veteran community.</p>
      </>
    ),
    photo: Secretary,
  },
  {
    title: 'Property Manager',
    name: 'Kevin DeCanter',
    bio: 'I need a Bio',
    photo: PropertyManager,
  },
  {
    title: 'Therapist',
    name: 'Sean Young',
    bio: (
      <>
        <p>Sean Young MSW, LMSW. I am a individual, family, and marital therapist licensed in Michigan with 28 years of experience. I have worked with people with a wide range of concerns including depression, anxiety, anger management issues, suicidal ideation, homicidal ideation, and relationship issues. In addition, I have expertise and specialized training in treating veterans and civilians who suffer from both non-combat and combat post traumatic stress disorder, including military sexual trauma. </p>
        <p>My approach to psychotherapy is very kind, caring, and direct. I believe in treating everyone equally with respect and honesty.</p>
        <p>Professional experience Additional areas of focus: Addictions, Grief, Intimacy-related issues, Eating disorders, Sleeping disorders, Self esteem, Bipolar disorder, Schizophrenia, Coping with life changes, Abandonment, Communication problems, Coping with Natural or Human-Caused Disaster, Divorce and separation, Domestic Violence, Family Problems, First Responder Issues, Forgiveness, Guilt and shame, Impulsivity, Infidelity, Men's issues, Military and Veterans Issues, Mood disorders , Multicultural Concerns, Panic disorder and panic attacks, Personality Disorders, Postpartum Depression, Post-traumatic stress, Self-Harm, Sexual Assault and Abuse, Sexual Dysfunction, Social anxiety and phobia, Workplace issues. </p>
        <p>Clinical approaches: Cognitive Processing Therapy (CPT), Cognitive Behavioral Therapy (CBT), Emotionally-Focused Therapy (EFT), Solution-Focused Therapy, Trauma-Focused Therapy.</p>
      </>
    ),
    photo: Therapist,
  },
  {
    title: 'Director',
    name: 'Chris Jollie',
    bio: (
      <>
      <p> I was born in East Michigan, and eventually moved and grew up in Northwest Michigan. I was raised by my grandparents, as my mother worked a lot and was not present. My grandfather fostered my love of the outdoors, hunting, fishing, woodworking, and I credit him for my strong work ethic. Growing up, I was quiet and shy, was always a big kid for my age, and had no dad. These traits made me a target for bullying and ridicule, but also helped develop a 'thick skin' and a "Never Quit" mindset. My mother eventually married a veteran of the United States Marine Corps, who adopted me later in life; he passed in 2005. </p>
      <p> I proudly served on active duty in the United States Navy, and medically retired in 1999. After contracting in the early 2000's, I again searched for a sense of purpose. I was in conflict physically and emotionally, which led to many personal struggles. I continued to find unhealthy relationships, hurt loved ones, all while again struggling to find a sense of purpose. </p>
      <p> In 2011, I moved to West Michigan and found hope; I started a new career, met my future wife, and felt unconditional love in the relationships that I made here. I found God, understanding and purpose. I am a Christian, a husband, a father, and a leader. I am in better physical and mental health today, and am now 15 years sober. </p>
      <p> I am humbled and honored to give back to our community by serving with the West Michigan Veterans Ranch. Together, we help those who are struggling after returning home from serving to preserve our freedoms and the American way of life, and finding their way with their next mission, just as I did. </p>
      </>
    ),
    photo: Director,
  },
];

const BoardMembers = () => {
  const [activeMemberIndex, setActiveMemberIndex] = useState(null); // No type annotation

  return (
    <section className="board-section">
      <h2 className="board-title">Meet Our Board Members</h2>
      <div className="board-container">
        {boardMembers.map((member, index) => (
          <button 
            key={index}
            onClick={() => setActiveMemberIndex(activeMemberIndex === index ? null : index)}
            className="board-button"
          >
            {member.title}
          </button>
        ))}
      </div>

      {activeMemberIndex !== null && (
        <div className="active-member-container">
          <div className="member-image-container">
            <img 
              src={boardMembers[activeMemberIndex].photo} 
              alt={boardMembers[activeMemberIndex].name}
              className="member-image"
            />
          </div>
          <div className="member-info-container">
            <h3 className="member-name">{boardMembers[activeMemberIndex].name}</h3>
            <p className="member-bio">{boardMembers[activeMemberIndex].bio}</p>
          </div>
        </div>
      )}
    </section>
  );
};

// Export the BoardMembers component
export default BoardMembers;