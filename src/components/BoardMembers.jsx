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
      <p> Raised in Northwestern & Eastern Michigan by my grandparents, My grandfather fostered my love of the outdoors, hunting and fishing passing in the early 80's.. I was a big kid with no dad, and a quiet/shy demeanor. These traits both opened me up to ridicule and getting picked on, but also helped me develop a thick skin, learn a strong work ethic and living into the phrase "never quit". </p>
      <p> I proudly served in on active duty in the United States Navy NSW community through the Gulf War, Somalia and Bosnia & Croatia. I was adopted later in life by my stepdad, a United States Marine Corps. Veteran, a humble, quiet but funny and caring man who passed in 2005. With this loss and after being medically retired and returning to Michigan, I was always angry, in pain, and got bored quick which led to struggling with alcohol, a prescription drug dependency, and homelessness. I found the unhealthy relationships and hurt the ones I loved, struggling to find a sense of purpose.</p>
      <p> After moving to West Michigan in late 2011, starting a new career and meeting my future wife I found hope, god, love, and understanding. I am a Cristian man, husband and father;  in better physical and mental health, 15 years sober from prescription medication and only occasionally have a drink socially.</p>
      <p> I am humbled & honored to serve our community, in a small way, through West Michigan Veterans Ranch. I look forward to giving back to my community in a small way and help those who have struggled, as I have, after returning from serving to preserve our freedoms and the American way of life.</p>
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