import Section from "@/components/atomics/atoms/Section";
import Header from "@/components/atomics/organisms/Header";
import Projects from "@/components/atomics/organisms/Projects";
import Skills from "@/components/atomics/organisms/Skills";
import directus from "@/lib/directus/index";
import { readItems } from "@directus/sdk";
import Head from "next/head";
import React from "react";

const Page: React.FC = async function Page() {
    const skills = await  directus.request(readItems('skills'))
    const projects = await  directus.request(readItems('projects', {
        fields: ['*', {
            // @ts-ignore
            used_skills: [{
                skills_id: ['*']
            }]
        }],
    }))
    console.log(projects)
    
    return (
        <>
            <Head>
                <title>Sebille - portfolio</title>
            </Head>

            <Header />
            <Section>
                <Skills skills={skills} />
                <Projects projects={projects} />
            </Section>
        </>
    );
}

export default Page