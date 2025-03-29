import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

function RTE({ name, defaultValue="", control,label }) {
    return (





        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'></label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor initialValue={defaultValue}
                        init={
                            {
                                initialValue: defaultValue,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist", 
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmp",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",

                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic forecolor | \
                        alignleft aligncentre alignright alignjustify |\ bullist    numlist outdent indent | removeformat | help  |blocks | image | alignleft aligncentre  bold italic forecolor  ',
                                content_style: "body {font-family:Helvetica ,Arial,sans-serif ; font-size:14px}"


                            }
                        }

                    onEditorChange={onChange}
                    />
 
                )}
            />

        </div>

    )
}

export default RTE
