const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Blog = sequelize.define(
    'Blog',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'image',
      },
      author: {
        type: DataTypes.STRING(150),
        allowNull: true,
        field: 'author',
      },
      postDate: {
        type: DataTypes.DATEONLY, // Stores yyyy-mm-dd
        allowNull: false,
        field: 'post_date',
      },
      readingTime: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'reading_time',
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'title',
      },
      heading: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'heading',
      },
      subHeading: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'sub_heading',
      },
      blogType: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'blog_type',
      },
      description: {
        type: DataTypes.TEXT('long'), // Rich-text HTML content
        allowNull: false,
        field: 'description',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'is_active',
      },
      isPopularPost: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_popular_post',
      },
      displayOnHomePage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'display_on_home_page',
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        field: 'category',
      },
    },
    {
      tableName: 'blogs',
      timestamps: true,
      underscored: true,
    }
  );

  return Blog;
};