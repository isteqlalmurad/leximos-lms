/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Enrollment = {
  _id: string;
  _type: "enrollment";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "student";
  };
  course?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "course";
  };
  enrolledAt?: string;
  completedAt?: string;
  progress?: number;
  lastAccessedAt?: string;
  status?: "active" | "completed" | "dropped";
};

export type Student = {
  _id: string;
  _type: "student";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  clerkId?: string;
  imageUrl?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type Lesson = {
  _id: string;
  _type: "lesson";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: BlockContent;
  videoUrl?: string;
  attachments?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
    _key: string;
  }>;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Module = {
  _id: string;
  _type: "module";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  lessons?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "lesson";
  }>;
};

export type Course = {
  _id: string;
  _type: "course";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  price?: number;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  modules?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "module";
  }>;
  instructor?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "instructor";
  };
};

export type Instructor = {
  _id: string;
  _type: "instructor";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  bio?: string;
  photo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  description?: string;
  icon?: string;
  color?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | Enrollment | Student | BlockContent | Lesson | SanityFileAsset | Module | Course | Instructor | Category | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: app/(user)/page.tsx
// Variable: getCoursesQuery
// Query: *[_type == "course"] {    _id,    title,    description,    price,    "slug": slug.current,    image,    "category": category->{      name    },    "instructor": instructor->{      name,      photo    }  }
export type GetCoursesQueryResult = Array<{
  _id: string;
  title: string | null;
  description: string | null;
  price: number | null;
  slug: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  category: {
    name: string | null;
  } | null;
  instructor: {
    name: string | null;
    photo: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;

// Source: sanity/lib/courses/getCourseById.ts
// Variable: getCourseByIdQuery
// Query: *[_type == "course" && _id == $id][0] {      _id,      title,      slug,      description,      price,      image,      "category": category->{        name,        _id      },      "instructor": instructor->{        _id,        name,        bio,        photo      },      "modules": modules[]->{        _id,        title,        "lessons": lessons[]->{          _id,          title,          content,          videoUrl        }      }    }
export type GetCourseByIdQueryResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  description: string | null;
  price: number | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  category: {
    name: string | null;
    _id: string;
  } | null;
  instructor: {
    _id: string;
    name: string | null;
    bio: string | null;
    photo: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
  modules: Array<{
    _id: string;
    title: string | null;
    lessons: Array<{
      _id: string;
      title: string | null;
      content: BlockContent | null;
      videoUrl: string | null;
    }> | null;
  }> | null;
} | null;

// Source: sanity/lib/courses/getCourseBySlug.ts
// Variable: getCourseBySlugQuery
// Query: *[_type == "course" && slug.current == $slug][0] {      _id,      title,      description,      price,      image,      "category": category->{        name,        _id      },      "instructor": instructor->{        _id,        name,        bio,        photo      },      "modules": modules[]->{        _id,        title,        "lessons": lessons[]->{          _id,          title,          content,          videoUrl        }      }    }
export type GetCourseBySlugQueryResult = {
  _id: string;
  title: string | null;
  description: string | null;
  price: number | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  category: {
    name: string | null;
    _id: string;
  } | null;
  instructor: {
    _id: string;
    name: string | null;
    bio: string | null;
    photo: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
  modules: Array<{
    _id: string;
    title: string | null;
    lessons: Array<{
      _id: string;
      title: string | null;
      content: BlockContent | null;
      videoUrl: string | null;
    }> | null;
  }> | null;
} | null;

// Source: sanity/lib/student/getStudentByClerkId.ts
// Variable: getStudentByClerkIdQuery
// Query: *[_type == "student" && clerkId == $clerkId][0]
export type GetStudentByClerkIdQueryResult = {
  _id: string;
  _type: "student";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  clerkId?: string;
  imageUrl?: string;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"course\"] {\n    _id,\n    title,\n    description,\n    price,\n    \"slug\": slug.current,\n    image,\n    \"category\": category->{\n      name\n    },\n    \"instructor\": instructor->{\n      name,\n      photo\n    }\n  }": GetCoursesQueryResult;
    "*[_type == \"course\" && _id == $id][0] {\n      _id,\n      title,\n      slug,\n      description,\n      price,\n      image,\n      \"category\": category->{\n        name,\n        _id\n      },\n      \"instructor\": instructor->{\n        _id,\n        name,\n        bio,\n        photo\n      },\n      \"modules\": modules[]->{\n        _id,\n        title,\n        \"lessons\": lessons[]->{\n          _id,\n          title,\n          content,\n          videoUrl\n        }\n      }\n    }": GetCourseByIdQueryResult;
    "*[_type == \"course\" && slug.current == $slug][0] {\n      _id,\n      title,\n      description,\n      price,\n      image,\n      \"category\": category->{\n        name,\n        _id\n      },\n      \"instructor\": instructor->{\n        _id,\n        name,\n        bio,\n        photo\n      },\n      \"modules\": modules[]->{\n        _id,\n        title,\n        \"lessons\": lessons[]->{\n          _id,\n          title,\n          content,\n          videoUrl\n        }\n      }\n    }": GetCourseBySlugQueryResult;
    "*[_type == \"student\" && clerkId == $clerkId][0]": GetStudentByClerkIdQueryResult;
  }
}
