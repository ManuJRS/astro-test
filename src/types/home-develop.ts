export interface HomeDevelop {
  hero: HeroComponent;
  contentAling: ContentAlingComponent;
  background: BackgroundComponent;
  seo: SeoComponent;
}

export interface HeroComponent {
  title: string;
  image: ImageData;
}

export interface ContentAlingComponent {
  title: string;
  description: string;
  image: ImageData;
}

export interface BackgroundComponent {
  title: string;
  description: string;
  image: ImageData;
}

export interface SeoComponent {
  metaTitle: string;
  metaDescription: string;
}

export interface ImageData {
  url: string;
  alt: string;
}

// INTERFACES RESPONSE STRAPI

export interface HomeDevelopResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hero: Hero;
  seo: SEO;
  components: Component[];
}

export interface Component {
  __component: string;
  id: number;
  title: string;
  description: string;
  image: ComponentImage;
}

export interface ComponentImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  large?: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Hero {
  id: number;
  title: string;
  image: ShareImageClass;
}

export interface ShareImageClass {
  id: number;
  documentId: string;
  url: string;
  alternativeText: null | string;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: ShareImageClass;
}

export interface Meta {}
