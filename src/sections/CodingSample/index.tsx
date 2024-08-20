import {SectionHeader, SectionSubtitle, SectionTitle,Section} from "~/components/Section";


import React, { useEffect, useRef } from 'react';
import Editor, { Monaco, useMonaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

// Helper function to fetch types from dependencies
const fetchTypesFromDependency = async (dependency: string, path: string): Promise<string> => {
    const response = await fetch(`https://unpkg.com/${dependency}/${path}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch types from ${dependency}`);
    }
    return response.text();
};

interface MonacoEditorProps {
    value: string;
    onChange?: (value: string | undefined) => void;
    language?: string;
    height?: string;
    dependencies?: { dependency: string, path: string }[];
}

const code = `import CollectSDK, { CollectModel } from '@collect.so/javascript-sdk'

// Setup Collect instance
const Collect = new CollectSDK("API_TOKEN")

// Optionally define Model
export const UserRepo = new CollectModel(
    'USER',
    {
        name: { type: 'string' },
        email: { type: 'string', uniq: true },
        verified: { type: 'boolean', default: false },
        hobbies: { type: 'string', multiple: true, required: false },
        rating: { type: 'number', default: 1 },
        created: { type: 'datetime', default: () => new Date().toISOString() },
        password: { type: 'string' }
    },
    Collect
)

// Create new Record
const newUser = await UserRepo.create({
    name: "John Galt",
    email: 'john.g@example.com',
    hobbies: ['Programming', 'Hiking'],
    password: '********'
})

// Find Records by specific criteria
const matchedUsers = await UserRepo.find({
    where: {
        email: { $ne: 'john.g@example.com' },
        hobbies: { $in: ['Hiking'] },
        rating: { $gte: 1.5 }
    }
})`


const MonacoEditor: React.FC<MonacoEditorProps> = () => {
    // const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    //
    // const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    //     editorRef.current = editor;
    //
    //     // Load and add extra types from specified dependencies
    //     dependencies.forEach(async ({ dependency, path }) => {
    //         try {
    //             const types = await fetchTypesFromDependency(dependency, path);
    //             monaco.languages.typescript.typescriptDefaults.addExtraLib(types, `file:///node_modules/@collect.so/javascript-sdk`);
    //         } catch (error) {
    //             console.error(`Error loading types from ${dependency}:`, error);
    //         }
    //     });
    // };
    //
    // useEffect(() => {
    //     return () => {
    //         if (editorRef.current) {
    //             editorRef.current.dispose();
    //         }
    //     };
    // }, []);
    //
    // return (
    //     <Editor
    //         height={height}
    //         defaultLanguage={language}
    //         defaultValue={value}
    //         onMount={handleEditorDidMount}
    //         theme="vs-dark"
    //     />
    // );
    const monaco = useMonaco();

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
        editorRef.current = editor;

        // Load and add extra types from specified dependencies
        dependencies.forEach(async ({ dependency, path }) => {
            try {
                const types = await fetchTypesFromDependency(dependency, path);
                monaco.languages.typescript.typescriptDefaults.addExtraLib(types, `file:///node_modules/@collect.so/javascript-sdk`);
            } catch (error) {
                console.error(`Error loading types from ${dependency}:`, error);
            }
        });
    };

    useEffect(() => {
        if (monaco) {
            // Add additonal d.ts files to the JavaScript language service and change.
            // Also change the default compilation options.
            // The sample below shows how a class Facts is declared and introduced
            // to the system and how the compiler is told to use ES6 (target=2).

            // validation settings
            monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                noSemanticValidation: true,
                noSyntaxValidation: false
            });

            // compiler options
            monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                target: monaco.languages.typescript.ScriptTarget.ES6,
                allowNonTsExtensions: true
            });

            // extra libraries
            const libSource = [
                "declare class Facts {",
                "    /**",
                "     * Returns the next fact",
                "     */",
                "    static next():string",
                "}"
            ].join("\n");

            const libUri = "ts:filename/facts.d.ts";
            monaco.languages.typescript.javascriptDefaults.addExtraLib(
                libSource,
                libUri
            );
            // When resolving definitions and references, the editor will try to use created models.
            // Creating a model for the library allows "peek definition/references" commands to work with the library.
            monaco.editor.createModel(
                libSource,
                "typescript",
                monaco.Uri.parse(libUri)
            );
        }
    }, [monaco]);

    return (
        <Editor
            height="90vh"
            defaultLanguage="typescript"
            defaultValue={code}
        />
    );
};



export const CodingSample = () => {
    const dependencies = [
        { dependency: '@collect.so/javascript-sdk@0.24.0', path: '/types/index.d.ts' },
    ];



    return ( <Section className="container">
        <SectionHeader className="text-center">
            <SectionTitle>Development. Routine-Free.</SectionTitle>{" "}
            <SectionSubtitle className="m-auto max-w-4xl">
                Whether you've just started or are already working on something big,
                Collect seamlessly integrates into your existing development process.
                It adapts to your needs through the Dashboard, APIs, and SDKs.
            </SectionSubtitle>
        </SectionHeader>
            <MonacoEditor value={code} dependencies={dependencies} />

    </Section>
            )

}