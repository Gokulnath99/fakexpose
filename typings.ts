export type FileType = {
    id: string;
    filename: string;
    fullName: string;
    timestamp: Date;
    downloadURL: string;
    type: string;
    size: number;
}


type SampleItem = {
    description: string;
    'image-url': string;
};

// Define a type for the data structure
export type Data = {
    sample: SampleItem[];
};



export type CardData = {
    items: {
      name: string;
      description: string;
      link: string;
      imageURL: string;
      team: string;
      priority: boolean;
    }[];
    className?: string;
    
  };