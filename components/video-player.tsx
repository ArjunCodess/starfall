'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface VideoPlayerProps {
    thumbnailSrc: string;
    videoSrc: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnailSrc, videoSrc, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={thumbnailSrc}
                    alt={title}
                    width={1000}
                    height={562}
                    className="w-full rounded-md"
                />
                {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                        <Play size={64} className="text-white" />
                    </div>
                )}
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[90vw] w-[90vw] md:w-[60vw] p-0">
                    <div className="relative pt-[56.25%]">
                        <video
                            src={videoSrc}
                            controls
                            autoPlay
                            className="absolute top-0 left-0 w-full h-full"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default VideoPlayer;