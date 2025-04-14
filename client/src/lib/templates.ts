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

// Export all templates
export const templates: Template[] = [
  landingPageTemplate,
  portfolioTemplate,
  businessTemplate,
  ecommerceTemplate,
  saasTemplate
];