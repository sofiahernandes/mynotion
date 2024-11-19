import Image from "next/image";

export const Heroes = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image
                        src="/reading-light.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/documents-light.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image
                        src="/documents-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>
            </div>
        </div>
    );
}