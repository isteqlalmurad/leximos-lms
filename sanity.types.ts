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

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type LessonCompletion = {
  _id: string;
  _type: "lessonCompletion";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "student";
  };
  lesson?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "lesson";
  };
  module?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "module";
  };
  course?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "course";
  };
  completedAt?: string;
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
  amount?: number;
  paymentId?: string;
  enrolledAt?: string;
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
  description?: string;
  videoUrl?: string;
  loomUrl?: string;
  content?: Array<{
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

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | LessonCompletion | Enrollment | Student | BlockContent | Lesson | Module | Course | Instructor | Category | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/courses/getCourseById.ts
// Variable: getCourseByIdQuery
// Query: *[_type == "course" && _id == $id][0] {      ...,  // Spread all course fields      "category": category->{...},  // Expand the category reference, including all its fields      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields      "modules": modules[]-> {  // Expand the array of module references        ...,  // Include all module fields        "lessons": lessons[]-> {...}  // For each module, expand its array of lesson references      }    }
export type GetCourseByIdQueryResult = {
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
  category: {
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
  } | null;
  modules: Array<{
    _id: string;
    _type: "module";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    lessons: Array<{
      _id: string;
      _type: "lesson";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title?: string;
      slug?: Slug;
      description?: string;
      videoUrl?: string;
      loomUrl?: string;
      content?: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
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
    }> | null;
  }> | null;
  instructor: {
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
  } | null;
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
      content: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }> | null;
      videoUrl: string | null;
    }> | null;
  }> | null;
} | null;

// Source: sanity/lib/courses/getCourses.ts
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

// Source: sanity/lib/courses/searchCourses.ts
// Variable: searchQuery
// Query: *[_type == "course" && (    title match $term + "*" ||    description match $term + "*" ||    category->name match $term + "*"  )] {    _id,    _type,    _createdAt,    _updatedAt,    _rev,    title,    description,    price,    "slug": slug.current,    image,    "category": category->{      name,      _id,      _type,      _createdAt,      _updatedAt,      _rev    },    "instructor": instructor->{      _id,      _type,      _createdAt,      _updatedAt,      _rev,      name,      photo,      bio    }  }
export type SearchQueryResult = Array<{
  _id: string;
  _type: "course";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
  } | null;
  instructor: {
    _id: string;
    _type: "instructor";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
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
    bio: string | null;
  } | null;
}>;

// Source: sanity/lib/lessons/getLessonById.ts
// Variable: getLessonByIdQuery
// Query: *[_type == "lesson" && _id == $id][0] {    _id,    _type,    _createdAt,    _updatedAt,    _rev,    title,    description,    videoUrl,    loomUrl,    content,    "module": module->{      _id,      title,      "course": course->{        _id,        title      }    }  }
export type GetLessonByIdQueryResult = {
  _id: string;
  _type: "lesson";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string | null;
  description: string | null;
  videoUrl: string | null;
  loomUrl: string | null;
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  module: null;
} | null;

// Source: sanity/lib/lessons/getLessonCompletions.ts
// Variable: getCompletionsQuery
// Query: {    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && course._ref == $courseId] {      _id,      completedAt,      "lesson": lesson->{        _id,        title      },      "module": module->{        _id,        title      }    },    "course": *[_type == "course" && _id == $courseId][0] {      _id,      title,      "modules": modules[]-> {        _id,        title,        "lessons": lessons[]-> {          _id,          title        }      }    }  }
export type GetCompletionsQueryResult = {
  completedLessons: Array<{
    _id: string;
    completedAt: string | null;
    lesson: {
      _id: string;
      title: string | null;
    } | null;
    module: {
      _id: string;
      title: string | null;
    } | null;
  }>;
  course: {
    _id: string;
    title: string | null;
    modules: Array<{
      _id: string;
      title: string | null;
      lessons: Array<{
        _id: string;
        title: string | null;
      }> | null;
    }> | null;
  } | null;
};

// Source: sanity/lib/lessons/getModuleProgress.ts
// Variable: progressQuery
// Query: {    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && course._ref == $courseId] {      _id,      completedAt,      "lesson": lesson->{        _id,        title      },      "module": module->{        _id,        title      }    },    "course": *[_type == "course" && _id == $courseId][0] {      _id,      title,      "modules": modules[]-> {        _id,        title,        "lessons": lessons[]-> {          _id,          title        }      }    }  }
export type ProgressQueryResult = {
  completedLessons: Array<{
    _id: string;
    completedAt: string | null;
    lesson: {
      _id: string;
      title: string | null;
    } | null;
    module: {
      _id: string;
      title: string | null;
    } | null;
  }>;
  course: {
    _id: string;
    title: string | null;
    modules: Array<{
      _id: string;
      title: string | null;
      lessons: Array<{
        _id: string;
        title: string | null;
      }> | null;
    }> | null;
  } | null;
};

// Source: sanity/lib/student/getEnrolledCourses.ts
// Variable: getEnrolledCoursesQuery
// Query: *[_type == "student" && clerkId == $clerkId][0] {    "enrolledCourses": *[_type == "enrollment" && student._ref == ^._id] {      _id,      enrolledAt,      "course": course-> {        _id,        title,        description,        "slug": slug.current,        image,        "category": category->{          name        },        "instructor": instructor->{          name,          photo        },        "progress": count(*[_type == "lessonProgress" && student._ref == ^.student._ref && lesson._ref in *[_type == "lesson" && references(^.course._ref)]._id])      }    }  }
export type GetEnrolledCoursesQueryResult = {
  enrolledCourses: Array<{
    _id: string;
    enrolledAt: string | null;
    course: {
      _id: string;
      title: string | null;
      description: string | null;
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
      progress: number;
    } | null;
  }>;
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

// Source: sanity/lib/student/isEnrolledInCourse.ts
// Variable: studentQuery
// Query: *[_type == "student" && clerkId == $clerkId][0]._id
export type StudentQueryResult = string | null;
// Variable: enrollmentQuery
// Query: *[_type == "enrollment" && student._ref == $studentId && course._ref == $courseId][0]
export type EnrollmentQueryResult = {
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
  amount?: number;
  paymentId?: string;
  enrolledAt?: string;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"course\" && _id == $id][0] {\n      ...,  // Spread all course fields\n      \"category\": category->{...},  // Expand the category reference, including all its fields\n      \"instructor\": instructor->{...},  // Expand the instructor reference, including all its fields\n      \"modules\": modules[]-> {  // Expand the array of module references\n        ...,  // Include all module fields\n        \"lessons\": lessons[]-> {...}  // For each module, expand its array of lesson references\n      }\n    }": GetCourseByIdQueryResult;
    "*[_type == \"course\" && slug.current == $slug][0] {\n      _id,\n      title,\n      description,\n      price,\n      image,\n      \"category\": category->{\n        name,\n        _id\n      },\n      \"instructor\": instructor->{\n        _id,\n        name,\n        bio,\n        photo\n      },\n      \"modules\": modules[]->{\n        _id,\n        title,\n        \"lessons\": lessons[]->{\n          _id,\n          title,\n          content,\n          videoUrl\n        }\n      }\n    }": GetCourseBySlugQueryResult;
    "*[_type == \"course\"] {\n    _id,\n    title,\n    description,\n    price,\n    \"slug\": slug.current,\n    image,\n    \"category\": category->{\n      name\n    },\n    \"instructor\": instructor->{\n      name,\n      photo\n    }\n  }": GetCoursesQueryResult;
    "*[_type == \"course\" && (\n    title match $term + \"*\" ||\n    description match $term + \"*\" ||\n    category->name match $term + \"*\"\n  )] {\n    _id,\n    _type,\n    _createdAt,\n    _updatedAt,\n    _rev,\n    title,\n    description,\n    price,\n    \"slug\": slug.current,\n    image,\n    \"category\": category->{\n      name,\n      _id,\n      _type,\n      _createdAt,\n      _updatedAt,\n      _rev\n    },\n    \"instructor\": instructor->{\n      _id,\n      _type,\n      _createdAt,\n      _updatedAt,\n      _rev,\n      name,\n      photo,\n      bio\n    }\n  }": SearchQueryResult;
    "*[_type == \"lesson\" && _id == $id][0] {\n    _id,\n    _type,\n    _createdAt,\n    _updatedAt,\n    _rev,\n    title,\n    description,\n    videoUrl,\n    loomUrl,\n    content,\n    \"module\": module->{\n      _id,\n      title,\n      \"course\": course->{\n        _id,\n        title\n      }\n    }\n  }": GetLessonByIdQueryResult;
    "{\n    \"completedLessons\": *[_type == \"lessonCompletion\" && student._ref == $studentId && course._ref == $courseId] {\n      _id,\n      completedAt,\n      \"lesson\": lesson->{\n        _id,\n        title\n      },\n      \"module\": module->{\n        _id,\n        title\n      }\n    },\n    \"course\": *[_type == \"course\" && _id == $courseId][0] {\n      _id,\n      title,\n      \"modules\": modules[]-> {\n        _id,\n        title,\n        \"lessons\": lessons[]-> {\n          _id,\n          title\n        }\n      }\n    }\n  }": GetCompletionsQueryResult | ProgressQueryResult;
    "*[_type == \"student\" && clerkId == $clerkId][0] {\n    \"enrolledCourses\": *[_type == \"enrollment\" && student._ref == ^._id] {\n      _id,\n      enrolledAt,\n      \"course\": course-> {\n        _id,\n        title,\n        description,\n        \"slug\": slug.current,\n        image,\n        \"category\": category->{\n          name\n        },\n        \"instructor\": instructor->{\n          name,\n          photo\n        },\n        \"progress\": count(*[_type == \"lessonProgress\" && student._ref == ^.student._ref && lesson._ref in *[_type == \"lesson\" && references(^.course._ref)]._id])\n      }\n    }\n  }": GetEnrolledCoursesQueryResult;
    "*[_type == \"student\" && clerkId == $clerkId][0]": GetStudentByClerkIdQueryResult;
    "*[_type == \"student\" && clerkId == $clerkId][0]._id": StudentQueryResult;
    "*[_type == \"enrollment\" && student._ref == $studentId && course._ref == $courseId][0]": EnrollmentQueryResult;
  }
}
