
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-default'].styles;

            return config;
        }
    },

    website: {
    css: [
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    ]
  }
};


