const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Table 1: aboutus
  const AboutUs = sequelize.define(
    'AboutUs',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'aboutus',
      timestamps: true,
    }
  );

  // Table 2: about_mission_vision
  const AboutMissionVision = sequelize.define(
    'AboutMissionVision',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      tableName: 'about_mission_vision',
      timestamps: true,
    }
  );

  // Table 3: about_team_intros
  const AboutTeamIntro = sequelize.define(
    'AboutTeamIntro',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      tableName: 'about_team_intros',
      timestamps: true,
    }
  );

  // Table 4: about_teams
  const AboutTeam = sequelize.define(
    'AboutTeam',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'about_teams',
      timestamps: true,
    }
  );

  // Table 5: about_our_ventures
  const AboutOurVenture = sequelize.define(
    'AboutOurVenture',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'about_our_ventures',
      timestamps: true,
    }
  );

  return {
    AboutUs,
    AboutMissionVision,
    AboutTeamIntro,
    AboutTeam,
    AboutOurVenture,
  };
};