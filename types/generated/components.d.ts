import type { Schema, Struct } from '@strapi/strapi';

export interface AboutStatistics extends Struct.ComponentSchema {
  collectionName: 'components_about_statistics';
  info: {
    displayName: 'statistics';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AboutTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_events';
  info: {
    displayName: 'TimelineEvent';
  };
  attributes: {
    description: Schema.Attribute.String;
    eventTitle: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    iamge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsFeaturesItem extends Struct.ComponentSchema {
  collectionName: 'components_components_features_items';
  info: {
    displayName: 'Features Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    aboutMyself: Schema.Attribute.Text;
  };
}

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

export interface TourDetailsContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_tour_details_content_blocks';
  info: {
    displayName: 'ContentBlock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TourDetailsPriceTier extends Struct.ComponentSchema {
  collectionName: 'components_tour_details_price_tiers';
  info: {
    displayName: 'PriceTier';
  };
  attributes: {
    price: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    range: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.statistics': AboutStatistics;
      'about.timeline-event': AboutTimelineEvent;
      'blocks.hero': BlocksHero;
      'components.features-item': ComponentsFeaturesItem;
      'shared.about': SharedAbout;
      'shared.gallery': SharedGallery;
      'shared.item': SharedItem;
      'tour-details.content-block': TourDetailsContentBlock;
      'tour-details.price-tier': TourDetailsPriceTier;
    }
  }
}
