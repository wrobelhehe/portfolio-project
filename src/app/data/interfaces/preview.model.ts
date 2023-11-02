export interface Button {
    title: string,
    url: string
    img: string
}

export interface Preview {
    imageUrl: string;
    header: string;
    projectImageUrl?: string
    header2?: string;
    header3?: string;
    description?: string;
    technologies: string[]
    buttons?: Button[]
}
