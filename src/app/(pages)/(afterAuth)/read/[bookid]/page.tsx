"use client";
import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Navbar from "@/components/Navbar";
import styles from "./Read.module.css";
import { useParams, useRouter } from 'next/navigation';

const page = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.viewer}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@5.3.93/build/pdf.worker.min.js" >
                        <Viewer
                            fileUrl="https://pdfobject.com/pdf/sample.pdf"
                            plugins={[defaultLayoutPluginInstance]}
                            theme="dark"
                        />
                    </Worker>
                </div>
            </div>
        </div>
    )
}

export default page