# Contributing to Modern Blog Platform

Thank you for your interest in contributing to Modern Blog Platform! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0 (or pnpm/yarn)
- Git

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/modern-blog.git`
3. Install dependencies: `npm install`
4. Copy environment variables: `cp .env.example .env.local`
5. Start development: `npm run dev:full`

## 📋 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style and formatting
- Run `npm run lint` before committing
- Use meaningful variable and function names
- Add comments for complex logic

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new article search functionality
fix: resolve mobile navigation bug
docs: update installation instructions
style: improve button hover effects
refactor: optimize API service layer
test: add unit tests for utils functions
```

### Branch Naming
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/code-improvement` - Code refactoring

## 🧪 Testing

### Running Tests
```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Writing Tests
- Write unit tests for utility functions
- Add integration tests for API services
- Include accessibility tests for components
- Test error scenarios and edge cases

## 📝 Pull Request Process

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the coding guidelines
   - Add tests for new functionality
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   npm run lint
   npm run type-check
   npm run test
   npm run build
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a clear, descriptive title
   - Include a detailed description of changes
   - Reference any related issues
   - Add screenshots for UI changes

### Pull Request Template
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 🐛 Bug Reports

When reporting bugs, please include:
- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Additional context**: Any other relevant information

## 💡 Feature Requests

When requesting features:
- Describe the problem you're trying to solve
- Explain your proposed solution
- Consider alternative solutions
- Provide mockups or examples if helpful

## 📚 Documentation

- Update README.md for new features
- Add JSDoc comments for functions and components
- Update API documentation for service changes
- Include examples in documentation

## 🔍 Code Review Guidelines

### As a Reviewer
- Be constructive and respectful
- Focus on code quality and maintainability
- Suggest improvements, don't just point out problems
- Consider performance and accessibility impacts

### As an Author
- Respond to feedback promptly
- Ask questions if feedback is unclear
- Make requested changes or explain why you disagree
- Keep discussions focused on the code

## 🏆 Recognition

Contributors will be:
- Added to the README contributors section
- Mentioned in release notes for significant contributions
- Invited to be maintainers for consistent, quality contributions

## 📞 Getting Help

- **Discord**: [Join our Discord server](https://discord.gg/yourdiscord)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/modern-blog/discussions)
- **Issues**: [GitHub Issues](https://github.com/yourusername/modern-blog/issues)

## 📄 License

By contributing to Modern Blog Platform, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Modern Blog Platform! 🎉
