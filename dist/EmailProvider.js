(function (global) {
    function EmailProvider(options = {}) {
        this.emailProviders = [
            "gmail.com",
            "yahoo.com",
            "outlook.com",
            "icloud.com",
            "hotmail.com",
            ...(options.emailProviders || [])
        ];

        this.inputClass = options.inputClass || 'email-provider';
        this.init();
    }

    EmailProvider.prototype.init = function () {
        document.querySelectorAll(`input.${this.inputClass}[type="email"]`).forEach(input => {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';

            const ul = this.createSuggestionList();
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(ul);

            input.addEventListener('input', () => this.handleInput(input, ul));
            input.addEventListener('blur', () => this.handleBlur(ul));
        });
    };

    EmailProvider.prototype.createSuggestionList = function () {
        const ul = document.createElement('ul');
        Object.assign(ul.style, {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            position: 'absolute',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            display: 'none',
            zIndex: '1'
        });
        return ul;
    };

    EmailProvider.prototype.handleInput = function (input, ul) {
        let value = input.value.trim().split('@')[0];  // Remove any existing '@' and what follows
        value = this.escapeEmail(value);

        ul.innerHTML = '';

        if (value) {
            this.emailProviders.forEach(provider => {
                const suggestion = `${value}@${provider}`;
                ul.appendChild(this.createSuggestionItem(suggestion, input, ul));
            });

            ul.style.display = ul.children.length ? 'block' : 'none';
        } else {
            ul.style.display = 'none';
        }
    };

    EmailProvider.prototype.escapeEmail = function (value) {
        return value.replace(/[^a-zA-Z0-9._-]/g, ''); // Remove invalid email characters
    };

    EmailProvider.prototype.createSuggestionItem = function (suggestion, input, ul) {
        const li = document.createElement('li');
        li.textContent = suggestion;
        Object.assign(li.style, {
            padding: '5px',
            cursor: 'pointer'
        });

        li.addEventListener('click', () => {
            input.value = suggestion;
            ul.style.display = 'none';
        });

        return li;
    };

    EmailProvider.prototype.handleBlur = function (ul) {
        setTimeout(() => { ul.style.display = 'none'; }, 100);
    };

    document.addEventListener('DOMContentLoaded', () => new EmailProvider({}));

    global.EmailProvider = EmailProvider;
})(window);