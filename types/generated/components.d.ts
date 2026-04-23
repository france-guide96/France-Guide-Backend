import type { Schema, Struct } from '@strapi/strapi';

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'Item';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.gallery': SharedGallery;
      'shared.item': SharedItem;
    }
  }
}
