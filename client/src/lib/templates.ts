import { Canvas, Element } from '@/components/elements/ElementTypes';
import { generateId } from './utils';

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  canvas: Canvas;
}

// Helper function to create a template canvas with proper IDs
function createTemplateCanvas(children: Omit<Element, 'id'>[]): Canvas {
  // Assign IDs to all elements and their children recursively
  const assignIds = (elements: Omit<Element, 'id'>[]): Element[] => {
    return elements.map(element => {
      const newElement = {
        ...element,
        id: generateId()
      } as Element;
      
      if (newElement.children && newElement.children.length > 0) {
        newElement.children = assignIds(newElement.children);
      }
      
      return newElement;
    });
  };
  
  return {
    id: 'canvas',
    width: 1000,
    height: 600,
    children: assignIds(children)
  };
}

// Landing Page Template
const landingPageTemplate: Template = {
  id: 'landing-page',
  name: 'Landing Page',
  description: 'A clean landing page with hero section and features',
  thumbnail: 'landing-page-thumbnail',
  canvas: createTemplateCanvas([
    // Header
    {
      type: 'container',
      style: {
        padding: '20px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e7eb'
      },
      children: [
        {
          type: 'heading',
          content: 'Company Name',
          style: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'hsl(var(--primary))',
            margin: '0'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            gap: '24px',
            marginLeft: '0',
            marginRight: '0',
            marginBottom: '0'
          },
          children: [
            {
              type: 'link',
              content: 'Home',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Features',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Pricing',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Contact',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            }
          ]
        }
      ]
    },
    // Hero Section
    {
      type: 'container',
      style: {
        padding: '80px 20px',
        backgroundColor: 'hsl(var(--primary))',
        color: 'white',
        textAlign: 'center'
      },
      children: [
        {
          type: 'heading',
          content: 'Welcome to Our Website',
          style: {
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }
        },
        {
          type: 'text',
          content: 'A modern and professional solution for your business needs.',
          style: {
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }
        },
        {
          type: 'button',
          content: 'Get Started',
          style: {
            backgroundColor: 'white',
            color: 'hsl(var(--primary))',
            padding: '12px 32px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block',
            margin: '0 auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    },
    // Features Section
    {
      type: 'container',
      style: {
        padding: '80px 20px',
        backgroundColor: 'white'
      },
      children: [
        {
          type: 'heading',
          content: 'Our Features',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            marginLeft: '0',
            marginRight: '0'
          },
          children: [
            // Feature 1
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Feature One',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'text',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
                  style: {
                    color: '#4b5563'
                  }
                }
              ]
            },
            // Feature 2
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Feature Two',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'text',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
                  style: {
                    color: '#4b5563'
                  }
                }
              ]
            },
            // Feature 3
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Feature Three',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'text',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
                  style: {
                    color: '#4b5563'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // Contact Section
    {
      type: 'container',
      style: {
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      },
      children: [
        {
          type: 'heading',
          content: 'Contact Us',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }
        },
        {
          type: 'form',
          style: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          },
          children: [
            {
              type: 'input',
              label: 'Your Name',
              placeholder: 'Enter your name',
              style: {
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                marginBottom: '16px'
              }
            },
            {
              type: 'input',
              label: 'Email Address',
              placeholder: 'Enter your email',
              style: {
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                marginBottom: '16px'
              }
            },
            {
              type: 'textarea',
              label: 'Message',
              placeholder: 'Enter your message',
              rows: 4,
              style: {
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                marginBottom: '24px'
              }
            },
            {
              type: 'button',
              content: 'Send Message',
              style: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'inline-block'
              }
            }
          ]
        }
      ]
    },
    // Footer
    {
      type: 'container',
      style: {
        padding: '24px 20px',
        backgroundColor: '#1f2937',
        color: 'white',
        textAlign: 'center'
      },
      children: [
        {
          type: 'text',
          content: '© 2025 Company Name. All rights reserved.',
          style: {
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0'
          }
        }
      ]
    }
  ])
};

// Portfolio Template
const portfolioTemplate: Template = {
  id: 'portfolio',
  name: 'Portfolio',
  description: 'A portfolio layout for showcasing your work',
  thumbnail: 'portfolio-thumbnail',
  canvas: createTemplateCanvas([
    // Header
    {
      type: 'container',
      style: {
        padding: '16px 24px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #f1f5f9'
      },
      children: [
        {
          type: 'heading',
          content: 'Your Name',
          style: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'hsl(var(--primary))',
            margin: '0'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            gap: '20px',
            marginLeft: '0',
            marginRight: '0',
            marginBottom: '0'
          },
          children: [
            {
              type: 'link',
              content: 'About',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Projects',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Resume',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            },
            {
              type: 'link',
              content: 'Contact',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0'
              }
            }
          ]
        }
      ]
    },
    // About Section
    {
      type: 'container',
      style: {
        padding: '80px 24px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      },
      children: [
        {
          type: 'heading',
          content: 'Hello, I\'m Your Name',
          style: {
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }
        },
        {
          type: 'text',
          content: 'Web Developer & Designer',
          style: {
            fontSize: '24px',
            color: 'hsl(var(--primary))',
            marginBottom: '24px'
          }
        },
        {
          type: 'text',
          content: 'I specialize in creating modern and responsive websites with clean and efficient code.',
          style: {
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 32px'
          }
        },
        {
          type: 'button',
          content: 'View My Work',
          style: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'white',
            padding: '12px 32px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block'
          }
        }
      ]
    },
    // Projects Section
    {
      type: 'container',
      style: {
        padding: '80px 24px',
        backgroundColor: 'white'
      },
      children: [
        {
          type: 'heading',
          content: 'My Projects',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            marginLeft: '0',
            marginRight: '0'
          },
          children: [
            // Project 1
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
              },
              children: [
                {
                  type: 'image',
                  src: 'https://via.placeholder.com/300x200/f3f4f6/94a3b8?text=Project+1',
                  alt: 'Project 1',
                  style: {
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginBottom: '0'
                  }
                },
                {
                  type: 'container',
                  style: {
                    padding: '24px'
                  },
                  children: [
                    {
                      type: 'heading',
                      content: 'Project One',
                      style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                      }
                    },
                    {
                      type: 'text',
                      content: 'A brief description of the project and the technologies used.',
                      style: {
                        marginBottom: '16px'
                      }
                    },
                    {
                      type: 'link',
                      content: 'View Project',
                      href: '#',
                      style: {
                        color: 'hsl(var(--primary))',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }
                    }
                  ]
                }
              ]
            },
            // Project 2
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
              },
              children: [
                {
                  type: 'image',
                  src: 'https://via.placeholder.com/300x200/f3f4f6/94a3b8?text=Project+2',
                  alt: 'Project 2',
                  style: {
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginBottom: '0'
                  }
                },
                {
                  type: 'container',
                  style: {
                    padding: '24px'
                  },
                  children: [
                    {
                      type: 'heading',
                      content: 'Project Two',
                      style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                      }
                    },
                    {
                      type: 'text',
                      content: 'A brief description of the project and the technologies used.',
                      style: {
                        marginBottom: '16px'
                      }
                    },
                    {
                      type: 'link',
                      content: 'View Project',
                      href: '#',
                      style: {
                        color: 'hsl(var(--primary))',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }
                    }
                  ]
                }
              ]
            },
            // Project 3
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
              },
              children: [
                {
                  type: 'image',
                  src: 'https://via.placeholder.com/300x200/f3f4f6/94a3b8?text=Project+3',
                  alt: 'Project 3',
                  style: {
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginBottom: '0'
                  }
                },
                {
                  type: 'container',
                  style: {
                    padding: '24px'
                  },
                  children: [
                    {
                      type: 'heading',
                      content: 'Project Three',
                      style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                      }
                    },
                    {
                      type: 'text',
                      content: 'A brief description of the project and the technologies used.',
                      style: {
                        marginBottom: '16px'
                      }
                    },
                    {
                      type: 'link',
                      content: 'View Project',
                      href: '#',
                      style: {
                        color: 'hsl(var(--primary))',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // Contact Section
    {
      type: 'container',
      style: {
        padding: '80px 24px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      },
      children: [
        {
          type: 'heading',
          content: 'Get In Touch',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }
        },
        {
          type: 'text',
          content: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
          style: {
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 32px'
          }
        },
        {
          type: 'button',
          content: 'Email Me',
          style: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'white',
            padding: '12px 32px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block',
            marginRight: '16px'
          }
        },
        {
          type: 'button',
          content: 'Download Resume',
          style: {
            backgroundColor: 'transparent',
            color: 'hsl(var(--primary))',
            padding: '11px 32px',
            border: '1px solid hsl(var(--primary))',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block'
          }
        }
      ]
    },
    // Footer
    {
      type: 'container',
      style: {
        padding: '24px',
        backgroundColor: '#1f2937',
        color: 'white',
        textAlign: 'center'
      },
      children: [
        {
          type: 'text',
          content: '© 2025 Your Name. All rights reserved.',
          style: {
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0'
          }
        }
      ]
    }
  ])
};

// Business Website Template
const businessTemplate: Template = {
  id: 'business',
  name: 'Business Website',
  description: 'A professional business website layout',
  thumbnail: 'business-thumbnail',
  canvas: createTemplateCanvas([
    // Header
    {
      type: 'container',
      style: {
        padding: '16px 32px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      },
      children: [
        {
          type: 'heading',
          content: 'Business Ltd.',
          style: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'hsl(var(--primary))',
            margin: '0'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            gap: '32px',
            marginLeft: '0',
            marginRight: '0',
            marginBottom: '0'
          },
          children: [
            {
              type: 'link',
              content: 'Services',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0',
                fontWeight: '500'
              }
            },
            {
              type: 'link',
              content: 'About',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0',
                fontWeight: '500'
              }
            },
            {
              type: 'link',
              content: 'Testimonials',
              href: '#',
              style: {
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                margin: '0',
                fontWeight: '500'
              }
            },
            {
              type: 'button',
              content: 'Contact Us',
              style: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                marginLeft: '16px'
              }
            }
          ]
        }
      ]
    },
    // Hero Section
    {
      type: 'container',
      style: {
        padding: '80px 32px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      },
      children: [
        {
          type: 'heading',
          content: 'Professional Solutions for Your Business',
          style: {
            fontSize: '42px',
            fontWeight: 'bold',
            maxWidth: '800px',
            margin: '0 auto 24px',
            color: '#0f172a'
          }
        },
        {
          type: 'text',
          content: 'We provide innovative and reliable services to help your business grow and succeed in today\'s competitive market.',
          style: {
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 32px',
            color: '#475569'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginLeft: '0',
            marginRight: '0',
            marginBottom: '0'
          },
          children: [
            {
              type: 'button',
              content: 'Our Services',
              style: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'white',
                padding: '12px 32px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }
            },
            {
              type: 'button',
              content: 'Learn More',
              style: {
                backgroundColor: 'transparent',
                color: 'hsl(var(--primary))',
                padding: '11px 32px',
                border: '1px solid hsl(var(--primary))',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }
            }
          ]
        }
      ]
    },
    // Services Section
    {
      type: 'container',
      style: {
        padding: '80px 32px',
        backgroundColor: 'white'
      },
      children: [
        {
          type: 'heading',
          content: 'Our Services',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            marginLeft: '0',
            marginRight: '0'
          },
          children: [
            // Service 1
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                padding: '32px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s',
                textAlign: 'center'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Consulting',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: 'hsl(var(--primary))'
                  }
                },
                {
                  type: 'text',
                  content: 'Expert advice and strategic planning to optimize your business processes and drive growth.',
                  style: {
                    color: '#475569',
                    marginBottom: '24px'
                  }
                },
                {
                  type: 'link',
                  content: 'Learn More →',
                  href: '#',
                  style: {
                    color: 'hsl(var(--primary))',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                }
              ]
            },
            // Service 2
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                padding: '32px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s',
                textAlign: 'center'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Marketing',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: 'hsl(var(--primary))'
                  }
                },
                {
                  type: 'text',
                  content: 'Comprehensive marketing strategies to increase your brand visibility and reach your target audience.',
                  style: {
                    color: '#475569',
                    marginBottom: '24px'
                  }
                },
                {
                  type: 'link',
                  content: 'Learn More →',
                  href: '#',
                  style: {
                    color: 'hsl(var(--primary))',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                }
              ]
            },
            // Service 3
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                padding: '32px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s',
                textAlign: 'center'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Development',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: 'hsl(var(--primary))'
                  }
                },
                {
                  type: 'text',
                  content: 'Custom software solutions and web development services tailored to your specific business needs.',
                  style: {
                    color: '#475569',
                    marginBottom: '24px'
                  }
                },
                {
                  type: 'link',
                  content: 'Learn More →',
                  href: '#',
                  style: {
                    color: 'hsl(var(--primary))',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // Testimonials Section
    {
      type: 'container',
      style: {
        padding: '80px 32px',
        backgroundColor: '#f8fafc'
      },
      children: [
        {
          type: 'heading',
          content: 'What Our Clients Say',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }
        },
        {
          type: 'row',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            marginLeft: '0',
            marginRight: '0'
          },
          children: [
            // Testimonial 1
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              },
              children: [
                {
                  type: 'text',
                  content: '"Business Ltd. provided excellent service and helped us increase our revenue by 40% in just six months. Highly recommended!"',
                  style: {
                    fontSize: '16px',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                    color: '#475569'
                  }
                },
                {
                  type: 'heading',
                  content: 'John Smith',
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '4px'
                  }
                },
                {
                  type: 'text',
                  content: 'CEO, Tech Solutions Inc.',
                  style: {
                    fontSize: '14px',
                    color: '#64748b'
                  }
                }
              ]
            },
            // Testimonial 2
            {
              type: 'column',
              style: {
                flex: '1 1 300px',
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              },
              children: [
                {
                  type: 'text',
                  content: '"The team at Business Ltd. is professional, responsive, and delivers results. We\'ve been working with them for three years now."',
                  style: {
                    fontSize: '16px',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                    color: '#475569'
                  }
                },
                {
                  type: 'heading',
                  content: 'Jane Doe',
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '4px'
                  }
                },
                {
                  type: 'text',
                  content: 'Marketing Director, Global Commerce',
                  style: {
                    fontSize: '14px',
                    color: '#64748b'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // CTA Section
    {
      type: 'container',
      style: {
        padding: '80px 32px',
        backgroundColor: 'hsl(var(--primary))',
        color: 'white',
        textAlign: 'center'
      },
      children: [
        {
          type: 'heading',
          content: 'Ready to Grow Your Business?',
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }
        },
        {
          type: 'text',
          content: 'Contact us today to learn how our services can help you achieve your business goals.',
          style: {
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto 32px'
          }
        },
        {
          type: 'button',
          content: 'Schedule a Consultation',
          style: {
            backgroundColor: 'white',
            color: 'hsl(var(--primary))',
            padding: '14px 32px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block'
          }
        }
      ]
    },
    // Footer
    {
      type: 'container',
      style: {
        padding: '64px 32px 32px',
        backgroundColor: '#1f2937',
        color: 'white'
      },
      children: [
        {
          type: 'row',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            marginLeft: '0',
            marginRight: '0',
            marginBottom: '48px',
            justifyContent: 'space-between'
          },
          children: [
            // Company Info
            {
              type: 'column',
              style: {
                flex: '1 1 300px'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Business Ltd.',
                  style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'text',
                  content: 'Providing professional business solutions since 2010. Our mission is to help companies reach their full potential.',
                  style: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0'
                  }
                }
              ]
            },
            // Quick Links
            {
              type: 'column',
              style: {
                flex: '0 1 200px'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Quick Links',
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'link',
                  content: 'Services',
                  href: '#',
                  style: {
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    marginBottom: '8px'
                  }
                },
                {
                  type: 'link',
                  content: 'About Us',
                  href: '#',
                  style: {
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    marginBottom: '8px'
                  }
                },
                {
                  type: 'link',
                  content: 'Testimonials',
                  href: '#',
                  style: {
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    marginBottom: '8px'
                  }
                },
                {
                  type: 'link',
                  content: 'Contact',
                  href: '#',
                  style: {
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    marginBottom: '0'
                  }
                }
              ]
            },
            // Contact Info
            {
              type: 'column',
              style: {
                flex: '0 1 200px'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Contact Us',
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '16px'
                  }
                },
                {
                  type: 'text',
                  content: 'info@businessltd.com',
                  style: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '8px'
                  }
                },
                {
                  type: 'text',
                  content: '+1 (555) 123-4567',
                  style: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '8px'
                  }
                },
                {
                  type: 'text',
                  content: '123 Business St, Suite 456, City, State 78901',
                  style: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0'
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'divider',
          style: {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '0',
            marginBottom: '24px'
          }
        },
        {
          type: 'text',
          content: '© 2025 Business Ltd. All rights reserved.',
          style: {
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: '0'
          }
        }
      ]
    }
  ])
};

// E-Commerce Template
const ecommerceTemplate: Template = {
  id: 'ecommerce',
  name: 'E-Commerce Shop',
  description: 'A modern, stylish e-commerce website template with product listings, categories, and shopping cart.',
  thumbnail: 'https://placehold.co/600x400/4b76e8/ffffff?text=E-Commerce',
  canvas: createTemplateCanvas([
    {
      type: 'container',
      style: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
      },
      children: [
        // Header
        {
          type: 'container',
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: '0',
            zIndex: 100
          },
          children: [
            // Logo
            {
              type: 'heading',
              content: 'SHOPIFY',
              style: {
                fontSize: '24px',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0'
              }
            },
            // Navigation
            {
              type: 'container',
              style: {
                display: 'flex',
                gap: '2rem'
              },
              children: [
                {
                  type: 'link',
                  content: 'Home',
                  href: '#',
                  style: {
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Shop',
                  href: '#',
                  style: {
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Categories',
                  href: '#',
                  style: {
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Cart (0)',
                  href: '#',
                  style: {
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                }
              ]
            }
          ]
        },
        
        // Hero Section
        {
          type: 'container',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#f8fafc',
            textAlign: 'center'
          },
          children: [
            {
              type: 'heading',
              content: 'Summer Collection 2025',
              style: {
                fontSize: '3rem',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: '1rem'
              }
            },
            {
              type: 'text',
              content: 'Discover the latest trends in fashion with our new summer collection.',
              style: {
                fontSize: '1.25rem',
                color: '#64748b',
                marginBottom: '2rem',
                maxWidth: '600px'
              }
            },
            {
              type: 'button',
              content: 'Shop Now',
              style: {
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }
            }
          ]
        },
        
        // Featured Products
        {
          type: 'container',
          style: {
            padding: '4rem 2rem'
          },
          children: [
            {
              type: 'heading',
              content: 'Featured Products',
              style: {
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '3rem'
              }
            },
            // Products Grid
            {
              type: 'container',
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2rem'
              },
              children: [
                // Product 1
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/400x300/3b82f6/ffffff?text=Product%201',
                      alt: 'Product 1',
                      style: {
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'heading',
                          content: 'Summer T-Shirt',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Comfortable cotton t-shirt for summer.',
                          style: {
                            color: '#64748b',
                            marginBottom: '1rem'
                          }
                        },
                        {
                          type: 'text',
                          content: '$29.99',
                          style: {
                            fontWeight: '700',
                            color: '#3b82f6',
                            fontSize: '1.25rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Product 2
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/400x300/4f46e5/ffffff?text=Product%202',
                      alt: 'Product 2',
                      style: {
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'heading',
                          content: 'Denim Jeans',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Classic denim jeans with a modern fit.',
                          style: {
                            color: '#64748b',
                            marginBottom: '1rem'
                          }
                        },
                        {
                          type: 'text',
                          content: '$59.99',
                          style: {
                            fontWeight: '700',
                            color: '#3b82f6',
                            fontSize: '1.25rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Product 3
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/400x300/ef4444/ffffff?text=Product%203',
                      alt: 'Product 3',
                      style: {
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'heading',
                          content: 'Summer Dress',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Lightweight dress for hot summer days.',
                          style: {
                            color: '#64748b',
                            marginBottom: '1rem'
                          }
                        },
                        {
                          type: 'text',
                          content: '$45.99',
                          style: {
                            fontWeight: '700',
                            color: '#3b82f6',
                            fontSize: '1.25rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Product 4
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/400x300/10b981/ffffff?text=Product%204',
                      alt: 'Product 4',
                      style: {
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'heading',
                          content: 'Sneakers',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Stylish and comfortable sneakers.',
                          style: {
                            color: '#64748b',
                            marginBottom: '1rem'
                          }
                        },
                        {
                          type: 'text',
                          content: '$79.99',
                          style: {
                            fontWeight: '700',
                            color: '#3b82f6',
                            fontSize: '1.25rem'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Call to Action
        {
          type: 'container',
          style: {
            padding: '4rem 2rem',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            textAlign: 'center'
          },
          children: [
            {
              type: 'heading',
              content: 'Join Our Newsletter',
              style: {
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }
            },
            {
              type: 'text',
              content: 'Get the latest news and offers directly to your inbox.',
              style: {
                marginBottom: '2rem'
              }
            },
            {
              type: 'container',
              style: {
                display: 'flex',
                maxWidth: '500px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'input',
                  placeholder: 'Enter your email',
                  style: {
                    flex: '1',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem 0 0 0.5rem',
                    border: 'none'
                  }
                },
                {
                  type: 'button',
                  content: 'Subscribe',
                  style: {
                    backgroundColor: '#1e293b',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '0 0.5rem 0.5rem 0',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        },
        
        // Footer
        {
          type: 'container',
          style: {
            backgroundColor: '#1e293b',
            color: '#ffffff',
            padding: '4rem 2rem'
          },
          children: [
            {
              type: 'container',
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              },
              children: [
                // Company Info
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'SHOPIFY',
                      style: {
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: '#3b82f6'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Quality fashion at affordable prices for everyone.',
                      style: {
                        color: '#94a3b8',
                        marginBottom: '1rem'
                      }
                    }
                  ]
                },
                
                // Quick Links
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Quick Links',
                      style: {
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Home',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'About Us',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Shop',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Contact',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    }
                  ]
                },
                
                // Customer Service
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Customer Service',
                      style: {
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Shipping Policy',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Returns & Refunds',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'FAQs',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Privacy Policy',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    }
                  ]
                },
                
                // Contact
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Contact Us',
                      style: {
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Email: support@shopify.com',
                      style: {
                        color: '#94a3b8',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Phone: +1 (123) 456-7890',
                      style: {
                        color: '#94a3b8',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Address: 123 Fashion St, New York, NY',
                      style: {
                        color: '#94a3b8',
                        marginBottom: '0.5rem'
                      }
                    }
                  ]
                }
              ]
            },
            // Copyright
            {
              type: 'divider',
              style: {
                borderColor: '#334155',
                marginTop: '2rem',
                marginBottom: '2rem'
              }
            },
            {
              type: 'text',
              content: '© 2025 SHOPIFY. All rights reserved.',
              style: {
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#94a3b8',
                margin: '0'
              }
            }
          ]
        }
      ]
    }
  ])
};

// SaaS Landing Template 
const saasTemplate: Template = {
  id: 'saas-landing',
  name: 'SaaS Platform',
  description: 'A modern SaaS landing page template with hero section, features, pricing, and testimonials.',
  thumbnail: 'https://placehold.co/600x400/6366f1/ffffff?text=SaaS+Platform',
  canvas: createTemplateCanvas([
    {
      type: 'container',
      style: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        fontFamily: 'Inter, sans-serif'
      },
      children: [
        // Header
        {
          type: 'container',
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #f1f5f9'
          },
          children: [
            // Logo
            {
              type: 'heading',
              content: 'orbit',
              style: {
                fontSize: '2rem',
                fontWeight: '800',
                color: '#6366f1',
                margin: '0'
              }
            },
            // Navigation
            {
              type: 'container',
              style: {
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              },
              children: [
                {
                  type: 'link',
                  content: 'Product',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Features',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Pricing',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Resources',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'button',
                  content: 'Get Started',
                  style: {
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        },
        
        // Hero Section
        {
          type: 'container',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '5rem 2rem',
            backgroundColor: '#f8fafc'
          },
          children: [
            {
              type: 'heading',
              content: 'All-in-one platform for modern teams',
              style: {
                fontSize: '3.5rem',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }
            },
            {
              type: 'text',
              content: 'Streamline your workflow, collaborate effectively, and deliver projects on time with our comprehensive project management solution.',
              style: {
                fontSize: '1.25rem',
                color: '#64748b',
                marginBottom: '2.5rem',
                maxWidth: '700px'
              }
            },
            {
              type: 'container',
              style: {
                display: 'flex',
                gap: '1rem'
              },
              children: [
                {
                  type: 'button',
                  content: 'Start Free Trial',
                  style: {
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    padding: '0.875rem 2rem',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                },
                {
                  type: 'button',
                  content: 'Schedule Demo',
                  style: {
                    backgroundColor: 'transparent',
                    color: '#6366f1',
                    padding: '0.875rem 2rem',
                    border: '1px solid #6366f1',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ])
};

// Blog Template
const blogTemplate: Template = {
  id: 'blog',
  name: 'Blog Website',
  description: 'A modern blog template with featured posts, categories, and subscription form.',
  thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Blog+Template',
  canvas: createTemplateCanvas([
    {
      type: 'container',
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      },
      children: [
        // Header
        {
          type: 'container',
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          },
          children: [
            // Logo
            {
              type: 'heading',
              content: 'Blogger',
              style: {
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0'
              }
            },
            // Navigation
            {
              type: 'container',
              style: {
                display: 'flex',
                gap: '2rem'
              },
              children: [
                {
                  type: 'link',
                  content: 'Home',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Articles',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Categories',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'About',
                  href: '#',
                  style: {
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'button',
                  content: 'Subscribe',
                  style: {
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    padding: '0.5rem 1.25rem',
                    border: 'none',
                    borderRadius: '0.375rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        },
        
        // Featured Post
        {
          type: 'container',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#f8fafc',
            textAlign: 'center'
          },
          children: [
            {
              type: 'container',
              style: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '800px',
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              },
              children: [
                {
                  type: 'image',
                  src: 'https://placehold.co/1200x600/3b82f6/ffffff?text=Featured+Post',
                  alt: 'Featured Post',
                  style: {
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover'
                  }
                },
                {
                  type: 'container',
                  style: {
                    padding: '2rem'
                  },
                  children: [
                    {
                      type: 'text',
                      content: 'FEATURED POST • APRIL 14, 2025',
                      style: {
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#3b82f6',
                        letterSpacing: '0.05em',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'heading',
                      content: '10 Tips for Better Productivity in 2025',
                      style: {
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: '#0f172a'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Learn the best productivity techniques that will help you achieve more in less time. These proven strategies have helped thousands of professionals overcome procrastination and boost their efficiency.',
                      style: {
                        fontSize: '1.125rem',
                        color: '#475569',
                        marginBottom: '1.5rem',
                        lineHeight: '1.7'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Continue Reading →',
                      href: '#',
                      style: {
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.125rem'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Recent Posts
        {
          type: 'container',
          style: {
            padding: '4rem 2rem'
          },
          children: [
            {
              type: 'heading',
              content: 'Recent Articles',
              style: {
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '3rem',
                textAlign: 'center'
              }
            },
            // Posts Grid
            {
              type: 'container',
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              },
              children: [
                // Post 1
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/800x500/4f46e5/ffffff?text=Article+1',
                      alt: 'Article 1',
                      style: {
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'TECHNOLOGY • APR 10',
                          style: {
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#6366f1',
                            letterSpacing: '0.05em',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'heading',
                          content: 'AI Trends to Watch in 2025',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            marginBottom: '0.75rem',
                            color: '#0f172a'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Artificial intelligence is evolving faster than ever. Discover the top trends that will shape the industry this year.',
                          style: {
                            fontSize: '0.875rem',
                            color: '#64748b',
                            marginBottom: '1rem',
                            lineHeight: '1.6'
                          }
                        },
                        {
                          type: 'link',
                          content: 'Read More →',
                          href: '#',
                          style: {
                            color: '#4f46e5',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.875rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Post 2
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/800x500/10b981/ffffff?text=Article+2',
                      alt: 'Article 2',
                      style: {
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'HEALTH • APR 8',
                          style: {
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#10b981',
                            letterSpacing: '0.05em',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'heading',
                          content: 'The Benefits of Mindful Meditation',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            marginBottom: '0.75rem',
                            color: '#0f172a'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Learn how just 10 minutes of daily meditation can significantly improve your mental health and productivity.',
                          style: {
                            fontSize: '0.875rem',
                            color: '#64748b',
                            marginBottom: '1rem',
                            lineHeight: '1.6'
                          }
                        },
                        {
                          type: 'link',
                          content: 'Read More →',
                          href: '#',
                          style: {
                            color: '#10b981',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.875rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Post 3
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                  },
                  children: [
                    {
                      type: 'image',
                      src: 'https://placehold.co/800x500/f59e0b/ffffff?text=Article+3',
                      alt: 'Article 3',
                      style: {
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        padding: '1.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'TRAVEL • APR 5',
                          style: {
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#f59e0b',
                            letterSpacing: '0.05em',
                            marginBottom: '0.5rem'
                          }
                        },
                        {
                          type: 'heading',
                          content: 'Hidden Gems: Unexplored Destinations',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            marginBottom: '0.75rem',
                            color: '#0f172a'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Discover beautiful destinations off the beaten path that offer authentic experiences away from the crowds.',
                          style: {
                            fontSize: '0.875rem',
                            color: '#64748b',
                            marginBottom: '1rem',
                            lineHeight: '1.6'
                          }
                        },
                        {
                          type: 'link',
                          content: 'Read More →',
                          href: '#',
                          style: {
                            color: '#f59e0b',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.875rem'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Newsletter
        {
          type: 'container',
          style: {
            padding: '4rem 2rem',
            backgroundColor: '#f1f5f9',
            textAlign: 'center'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '600px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Subscribe to Our Newsletter',
                  style: {
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: '#0f172a'
                  }
                },
                {
                  type: 'text',
                  content: 'Get our weekly digest of articles, tips, and resources delivered straight to your inbox.',
                  style: {
                    fontSize: '1.125rem',
                    color: '#64748b',
                    marginBottom: '2rem'
                  }
                },
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    gap: '0.5rem'
                  },
                  children: [
                    {
                      type: 'input',
                      placeholder: 'Your email address',
                      style: {
                        flex: '1',
                        padding: '0.75rem 1rem',
                        fontSize: '1rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #e2e8f0'
                      }
                    },
                    {
                      type: 'button',
                      content: 'Subscribe',
                      style: {
                        backgroundColor: '#3b82f6',
                        color: '#ffffff',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Footer
        {
          type: 'container',
          style: {
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '3rem 2rem'
          },
          children: [
            {
              type: 'container',
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              },
              children: [
                // About
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Blogger',
                      style: {
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: '#3b82f6'
                      }
                    },
                    {
                      type: 'text',
                      content: 'A modern blog covering technology, health, travel, and more. Join our community of readers and writers.',
                      style: {
                        color: '#94a3b8',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                      }
                    },
                    {
                      type: 'container',
                      style: {
                        display: 'flex',
                        gap: '1rem'
                      },
                      children: [
                        {
                          type: 'link',
                          content: 'Tw',
                          href: '#',
                          style: {
                            color: '#e2e8f0',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            width: '2rem',
                            height: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '0.25rem'
                          }
                        },
                        {
                          type: 'link',
                          content: 'Fb',
                          href: '#',
                          style: {
                            color: '#e2e8f0',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            width: '2rem',
                            height: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '0.25rem'
                          }
                        },
                        {
                          type: 'link',
                          content: 'Ig',
                          href: '#',
                          style: {
                            color: '#e2e8f0',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            width: '2rem',
                            height: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '0.25rem'
                          }
                        }
                      ]
                    }
                  ]
                },
                
                // Categories
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Categories',
                      style: {
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: '#f8fafc'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Technology',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Health & Wellness',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Travel',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Productivity',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Lifestyle',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    }
                  ]
                },
                
                // Quick Links
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Quick Links',
                      style: {
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: '#f8fafc'
                      }
                    },
                    {
                      type: 'link',
                      content: 'About Us',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Contact',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Privacy Policy',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Terms of Service',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#94a3b8',
                        textDecoration: 'none',
                        marginBottom: '0.5rem'
                      }
                    }
                  ]
                }
              ]
            },
            // Copyright
            {
              type: 'divider',
              style: {
                borderColor: '#1e293b',
                marginTop: '2rem',
                marginBottom: '2rem'
              }
            },
            {
              type: 'text',
              content: '© 2025 Blogger. All rights reserved.',
              style: {
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#94a3b8'
              }
            }
          ]
        }
      ]
    }
  ])
};

// Personal Portfolio Template
const personalPortfolioTemplate: Template = {
  id: 'personal-portfolio',
  name: 'Personal Portfolio',
  description: 'A modern personal portfolio site with projects, skills, and contact form.',
  thumbnail: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Personal+Portfolio',
  canvas: createTemplateCanvas([
    {
      type: 'container',
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#f9fafb'
      },
      children: [
        // Header/Navigation
        {
          type: 'container',
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            position: 'sticky',
            top: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            zIndex: 100
          },
          children: [
            // Logo
            {
              type: 'heading',
              content: 'Alex Johnson',
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#8b5cf6',
                margin: '0'
              }
            },
            // Links
            {
              type: 'container',
              style: {
                display: 'flex',
                gap: '2rem'
              },
              children: [
                {
                  type: 'link',
                  content: 'About',
                  href: '#about',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Projects',
                  href: '#projects',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Skills',
                  href: '#skills',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Contact',
                  href: '#contact',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                }
              ]
            }
          ]
        },
        
        // Hero Section
        {
          type: 'container',
          style: {
            padding: '6rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '900px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'text',
                  content: 'HELLO, I AM',
                  style: {
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#8b5cf6',
                    letterSpacing: '0.05em',
                    marginBottom: '1rem'
                  }
                },
                {
                  type: 'heading',
                  content: 'Alex Johnson',
                  style: {
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }
                },
                {
                  type: 'heading',
                  content: 'Full Stack Developer & UI/UX Designer',
                  style: {
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '1.5rem'
                  }
                },
                {
                  type: 'text',
                  content: 'I build modern, responsive websites and applications with a focus on clean design and exceptional user experience.',
                  style: {
                    fontSize: '1.25rem',
                    color: '#6b7280',
                    marginBottom: '2rem',
                    maxWidth: '700px'
                  }
                },
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center'
                  },
                  children: [
                    {
                      type: 'button',
                      content: 'View Projects',
                      style: {
                        backgroundColor: '#8b5cf6',
                        color: '#ffffff',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }
                    },
                    {
                      type: 'button',
                      content: 'Contact Me',
                      style: {
                        backgroundColor: 'transparent',
                        color: '#8b5cf6',
                        padding: '0.75rem 1.5rem',
                        border: '1px solid #8b5cf6',
                        borderRadius: '0.375rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Projects Section
        {
          type: 'container',
          style: {
            padding: '5rem 2rem',
            backgroundColor: '#f9fafb'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '1200px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'heading',
                  content: 'My Projects',
                  style: {
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }
                },
                {
                  type: 'text',
                  content: 'Here are some of my recent works',
                  style: {
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    marginBottom: '3rem',
                    textAlign: 'center'
                  }
                },
                // Project Grid
                {
                  type: 'container',
                  style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                  },
                  children: [
                    // Project 1
                    {
                      type: 'container',
                      style: {
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'image',
                          src: 'https://placehold.co/800x500/8b5cf6/ffffff?text=Project+1',
                          alt: 'Project 1',
                          style: {
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }
                        },
                        {
                          type: 'container',
                          style: {
                            padding: '1.5rem'
                          },
                          children: [
                            {
                              type: 'heading',
                              content: 'E-Commerce Website',
                              style: {
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '0.5rem'
                              }
                            },
                            {
                              type: 'text',
                              content: 'A fully responsive online store built with React, Node.js, and MongoDB with payment processing and admin dashboard.',
                              style: {
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                marginBottom: '1rem'
                              }
                            },
                            {
                              type: 'container',
                              style: {
                                display: 'flex',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                              },
                              children: [
                                {
                                  type: 'text',
                                  content: 'React',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#ede9fe',
                                    color: '#8b5cf6',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'Node.js',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#ecfdf5',
                                    color: '#10b981',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'MongoDB',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#f0f9ff',
                                    color: '#0ea5e9',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                }
                              ]
                            },
                            {
                              type: 'link',
                              content: 'View Project →',
                              href: '#',
                              style: {
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '0.875rem'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    
                    // Project 2
                    {
                      type: 'container',
                      style: {
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'image',
                          src: 'https://placehold.co/800x500/3b82f6/ffffff?text=Project+2',
                          alt: 'Project 2',
                          style: {
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }
                        },
                        {
                          type: 'container',
                          style: {
                            padding: '1.5rem'
                          },
                          children: [
                            {
                              type: 'heading',
                              content: 'Task Management App',
                              style: {
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '0.5rem'
                              }
                            },
                            {
                              type: 'text',
                              content: 'A productivity application with real-time collaboration, drag-and-drop interface, and reminder notifications.',
                              style: {
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                marginBottom: '1rem'
                              }
                            },
                            {
                              type: 'container',
                              style: {
                                display: 'flex',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                              },
                              children: [
                                {
                                  type: 'text',
                                  content: 'Vue.js',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#eef2ff',
                                    color: '#4f46e5',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'Firebase',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#fff7ed',
                                    color: '#f97316',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'Tailwind',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#f0fdfa',
                                    color: '#14b8a6',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                }
                              ]
                            },
                            {
                              type: 'link',
                              content: 'View Project →',
                              href: '#',
                              style: {
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '0.875rem'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    
                    // Project 3
                    {
                      type: 'container',
                      style: {
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'image',
                          src: 'https://placehold.co/800x500/ef4444/ffffff?text=Project+3',
                          alt: 'Project 3',
                          style: {
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }
                        },
                        {
                          type: 'container',
                          style: {
                            padding: '1.5rem'
                          },
                          children: [
                            {
                              type: 'heading',
                              content: 'Health & Fitness App',
                              style: {
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '0.5rem'
                              }
                            },
                            {
                              type: 'text',
                              content: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
                              style: {
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                marginBottom: '1rem'
                              }
                            },
                            {
                              type: 'container',
                              style: {
                                display: 'flex',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                              },
                              children: [
                                {
                                  type: 'text',
                                  content: 'React Native',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#fef2f2',
                                    color: '#ef4444',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'GraphQL',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#fdf2f8',
                                    color: '#ec4899',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                },
                                {
                                  type: 'text',
                                  content: 'Redux',
                                  style: {
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#eff6ff',
                                    color: '#3b82f6',
                                    borderRadius: '0.25rem',
                                    fontWeight: '500'
                                  }
                                }
                              ]
                            },
                            {
                              type: 'link',
                              content: 'View Project →',
                              href: '#',
                              style: {
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '0.875rem'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Contact Section
        {
          type: 'container',
          style: {
            padding: '5rem 2rem',
            backgroundColor: '#ffffff'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '800px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Get In Touch',
                  style: {
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }
                },
                {
                  type: 'text',
                  content: 'Have a project in mind or want to chat? Send me a message!',
                  style: {
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    marginBottom: '3rem',
                    textAlign: 'center'
                  }
                },
                // Contact Form
                {
                  type: 'container',
                  style: {
                    display: 'grid',
                    gap: '1.5rem'
                  },
                  children: [
                    // Name Field
                    {
                      type: 'container',
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'Your Name',
                          style: {
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151'
                          }
                        },
                        {
                          type: 'input',
                          placeholder: 'John Doe',
                          style: {
                            padding: '0.75rem',
                            borderRadius: '0.375rem',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem'
                          }
                        }
                      ]
                    },
                    
                    // Email Field
                    {
                      type: 'container',
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'Your Email',
                          style: {
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151'
                          }
                        },
                        {
                          type: 'input',
                          placeholder: 'john@example.com',
                          style: {
                            padding: '0.75rem',
                            borderRadius: '0.375rem',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem'
                          }
                        }
                      ]
                    },
                    
                    // Message Field
                    {
                      type: 'container',
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      },
                      children: [
                        {
                          type: 'text',
                          content: 'Your Message',
                          style: {
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151'
                          }
                        },
                        {
                          type: 'textarea',
                          placeholder: 'Tell me about your project...',
                          style: {
                            padding: '0.75rem',
                            borderRadius: '0.375rem',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem',
                            minHeight: '8rem'
                          }
                        }
                      ]
                    },
                    
                    // Submit Button
                    {
                      type: 'button',
                      content: 'Send Message',
                      style: {
                        backgroundColor: '#8b5cf6',
                        color: '#ffffff',
                        padding: '0.875rem',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        textAlign: 'center'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Footer
        {
          type: 'container',
          style: {
            padding: '2rem',
            backgroundColor: '#f3f4f6',
            textAlign: 'center'
          },
          children: [
            {
              type: 'text',
              content: '© 2025 Alex Johnson. All rights reserved.',
              style: {
                fontSize: '0.875rem',
                color: '#6b7280'
              }
            }
          ]
        }
      ]
    }
  ])
};

// Startup Landing Page Template
const startupTemplate: Template = {
  id: 'startup',
  name: 'Startup Landing',
  description: 'A polished startup landing page with features, pricing, and testimonials sections.',
  thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Startup+Landing',
  canvas: createTemplateCanvas([
    {
      type: 'container',
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      },
      children: [
        // Header
        {
          type: 'container',
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          },
          children: [
            // Logo
            {
              type: 'heading',
              content: 'LaunchPad',
              style: {
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#10b981',
                margin: '0'
              }
            },
            // Navigation
            {
              type: 'container',
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              },
              children: [
                {
                  type: 'link',
                  content: 'Features',
                  href: '#features',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Pricing',
                  href: '#pricing',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Testimonials',
                  href: '#testimonials',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'link',
                  content: 'Contact',
                  href: '#contact',
                  style: {
                    color: '#1f2937',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }
                },
                {
                  type: 'button',
                  content: 'Sign Up Free',
                  style: {
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    padding: '0.625rem 1.25rem',
                    border: 'none',
                    borderRadius: '0.375rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        },
        
        // Hero Section
        {
          type: 'container',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5rem 2rem',
            backgroundColor: '#f9fafb',
            textAlign: 'center'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '1000px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'text',
                  content: 'LAUNCHING SOON',
                  style: {
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#10b981',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }
                },
                {
                  type: 'heading',
                  content: 'The All-in-One Platform for Modern Teams',
                  style: {
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2'
                  }
                },
                {
                  type: 'text',
                  content: 'LaunchPad helps teams collaborate, manage projects, and streamline workflows all in one powerful yet simple platform. Say goodbye to juggling multiple tools.',
                  style: {
                    fontSize: '1.25rem',
                    color: '#4b5563',
                    marginBottom: '2.5rem',
                    maxWidth: '800px'
                  }
                },
                {
                  type: 'container',
                  style: {
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    marginBottom: '3rem'
                  },
                  children: [
                    {
                      type: 'button',
                      content: 'Start Free Trial',
                      style: {
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        padding: '0.875rem 2rem',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }
                    },
                    {
                      type: 'button',
                      content: 'Watch Demo',
                      style: {
                        backgroundColor: 'transparent',
                        color: '#111827',
                        padding: '0.875rem 2rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }
                    }
                  ]
                },
                {
                  type: 'image',
                  src: 'https://placehold.co/1200x600/10b981/ffffff?text=Dashboard+Preview',
                  alt: 'Dashboard Preview',
                  style: {
                    width: '100%',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }
                }
              ]
            }
          ]
        },
        
        // Features Section
        {
          type: 'container',
          style: {
            padding: '5rem 2rem',
            backgroundColor: '#ffffff'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '1200px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Key Features',
                  style: {
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }
                },
                {
                  type: 'text',
                  content: 'Everything you need to streamline your workflow',
                  style: {
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    marginBottom: '3rem',
                    textAlign: 'center'
                  }
                },
                // Features Grid
                {
                  type: 'container',
                  style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                  },
                  children: [
                    // Feature 1
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '🔄',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Seamless Integration',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Connect with 100+ tools and services you already use with just a few clicks. No more context switching.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    },
                    
                    // Feature 2
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '📊',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Powerful Analytics',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Get actionable insights with real-time metrics and detailed reports on your team\'s performance and progress.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    },
                    
                    // Feature 3
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '🛡️',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Enterprise Security',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Bank-level encryption and security protocols keep your sensitive data protected at all times.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    },
                    
                    // Feature 4
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '⚡',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Automation Tools',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Automate repetitive tasks with powerful workflows to save time and reduce errors in your processes.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    },
                    
                    // Feature 5
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '📱',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Mobile Experience',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Stay productive on the go with our fully-featured mobile apps for iOS and Android devices.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    },
                    
                    // Feature 6
                    {
                      type: 'container',
                      style: {
                        padding: '2rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      },
                      children: [
                        {
                          type: 'container',
                          style: {
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#d1fae5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                          },
                          children: [
                            {
                              type: 'text',
                              content: '👥',
                              style: {
                                fontSize: '1.5rem'
                              }
                            }
                          ]
                        },
                        {
                          type: 'heading',
                          content: 'Team Collaboration',
                          style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.75rem'
                          }
                        },
                        {
                          type: 'text',
                          content: 'Real-time collaboration tools that bring your team together, no matter where they\'re located around the world.',
                          style: {
                            fontSize: '1rem',
                            color: '#4b5563',
                            lineHeight: '1.6'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        // Call to Action
        {
          type: 'container',
          style: {
            padding: '5rem 2rem',
            backgroundColor: '#10b981',
            color: '#ffffff',
            textAlign: 'center'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '800px',
                margin: '0 auto'
              },
              children: [
                {
                  type: 'heading',
                  content: 'Ready to transform your workflow?',
                  style: {
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem'
                  }
                },
                {
                  type: 'text',
                  content: 'Join thousands of teams who are already using LaunchPad to streamline their processes and boost productivity.',
                  style: {
                    fontSize: '1.25rem',
                    marginBottom: '2rem'
                  }
                },
                {
                  type: 'button',
                  content: 'Start Your Free 14-Day Trial',
                  style: {
                    backgroundColor: '#ffffff',
                    color: '#10b981',
                    padding: '0.875rem 2rem',
                    border: 'none',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }
                }
              ]
            }
          ]
        },
        
        // Footer
        {
          type: 'container',
          style: {
            padding: '4rem 2rem',
            backgroundColor: '#f9fafb'
          },
          children: [
            {
              type: 'container',
              style: {
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem'
              },
              children: [
                // Company Info
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'LaunchPad',
                      style: {
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#10b981',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'text',
                      content: 'Streamline your team\'s workflow and boost productivity with our all-in-one platform.',
                      style: {
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                      }
                    }
                  ]
                },
                
                // Product Links
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Product',
                      style: {
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#111827',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Features',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Pricing',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Integrations',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Changelog',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    }
                  ]
                },
                
                // Company Links
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Company',
                      style: {
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#111827',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'About',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Blog',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Careers',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Contact',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    }
                  ]
                },
                
                // Resources Links
                {
                  type: 'container',
                  children: [
                    {
                      type: 'heading',
                      content: 'Resources',
                      style: {
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#111827',
                        marginBottom: '1rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Documentation',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Help Center',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Tutorials',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    },
                    {
                      type: 'link',
                      content: 'Community',
                      href: '#',
                      style: {
                        display: 'block',
                        color: '#6b7280',
                        textDecoration: 'none',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }
                    }
                  ]
                }
              ]
            },
            // Copyright
            {
              type: 'divider',
              style: {
                borderColor: '#e5e7eb',
                marginTop: '2.5rem',
                marginBottom: '1.5rem'
              }
            },
            {
              type: 'text',
              content: '© 2025 LaunchPad Inc. All rights reserved.',
              style: {
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#9ca3af'
              }
            }
          ]
        }
      ]
    }
  ])
};

// Export all templates
export const templates: Template[] = [
  landingPageTemplate,
  portfolioTemplate,
  businessTemplate,
  ecommerceTemplate,
  saasTemplate,
  blogTemplate,
  personalPortfolioTemplate,
  startupTemplate
];