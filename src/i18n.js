import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: { home: 'Home', shop: 'Bedding', about: 'About', contact: 'Contact', search: 'Search' },
            hero: {
                span: 'Elevate Your Sleep',
                title: 'Comfort Redefined',
                subtitle: 'Discover our premium collection of sustainably sourced, ethically made bedding designed for the modern sanctuary.',
                button: 'Shop Bedding'
            },
            home: { bestSellers: 'Best Sellers', bestSellersDesc: 'Our customers\' favorite picks for a perfect night\'s sleep.', viewAll: 'View All' },
            newsletter: { title: 'Join the Comfort Club', subtitle: 'Subscribe to receive updates, access to exclusive deals, and more.', placeholder: 'Enter your email address', button: 'Subscribe' },
            footer: {
                brand: 'Cozy Cover Beddings',
                brandDesc: 'Premium bedding collections designed for restful sleep and restorative comfort. Experience luxury every night.',
                shop: 'Shop',
                allBedding: 'All Bedding',
                sheets: 'Sheets',
                duvets: 'Duvets',
                pillows: 'Pillows',
                support: 'Support',
                contactUs: 'Contact Us',
                shipping: 'Shipping & Returns',
                faq: 'FAQ',
                privacy: 'Privacy Policy',
                stayConnected: 'Stay Connected',
                newsletter: 'Subscribe for exclusive offers and sleep tips.',
                emailPlaceholder: 'Enter your email',
                join: 'Join',
                rights: 'All rights reserved.',
                terms: 'Terms of Service'
            },
            contact: {
                title: 'Contact Us',
                subtitle: 'Have questions about our premium bedding? We\'re here to help you create your perfect sleep sanctuary.',
                formTitle: 'Send us a message',
                name: 'Full Name',
                email: 'Email Address',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send Message',
                visitTitle: 'Visit Our Studio',
                address: 'Address',
                phone: 'Phone',
                follow: 'Follow Us',
                quote: 'Sleep is the golden chain that ties health and our bodies together.',
                author: 'Thomas Dekker',
                success: 'Thank you for contacting us!'
            },
            shop: {
                title: 'All Bedding',
                items: 'items',
                filters: 'Filters',
                sortBy: 'Sort By',
                mostPopular: 'Most Popular',
                newest: 'Newest',
                priceLowHigh: 'Price: Low to High',
                priceHighLow: 'Price: High to Low',
                noProducts: 'No products found',
                tryAdjusting: 'Try adjusting your filters to find what you\'re looking for.',
                clearFilters: 'Clear all filters',
                showResults: 'Show Results'
            },
            filters: { category: 'Category', priceRange: 'Price Range', size: 'Size', color: 'Color', min: 'Min', max: 'Max', clearAll: 'Clear All Filters' },
            product: { reviews: 'Reviews', color: 'Color', size: 'Size', quantity: 'Quantity', addToCartPrice: 'Add to Cart - {{price}}', freeShipping: 'Free shipping over $200', easyReturns: '30-day returns', highlights: 'Product Highlights', similar: 'You May Also Like' },
            cart: { title: 'Shopping Cart', empty: 'Your Cart is Empty', emptySubtitle: 'Looks like you haven\'t added anything to your cart yet.', startShopping: 'Start Shopping', summary: 'Order Summary', subtotal: 'Subtotal', shipping: 'Shipping', shippingFree: 'Free', tax: 'Tax', taxDesc: 'Calculated at checkout', total: 'Total', checkout: 'Proceed to Checkout', remove: 'Remove', continue: 'Continue Shopping' },
            checkout: {
                title: 'Checkout',
                shippingInfo: 'Shipping Information',
                firstName: 'First Name',
                lastName: 'Last Name',
                city: 'City',
                zip: 'ZIP Code',
                phone: 'Phone Number',
                payment: 'Payment',
                paymentDesc: 'Payment integration would go here. For this demo, just click Place Order.',
                placeOrder: 'Place Order',
                thankYou: 'Thank You!',
                orderSuccess: 'Your order has been placed successfully.',
                confirmation: 'We\'ve sent a confirmation email to {{email}}.',
                orderId: 'Your order ID is',
                returnHome: 'Return to Home'
            },
            about: {
                title: 'About Cozy Cover',
                p1: 'Cozy Cover is Abuja’s trusted destination for premium, stylish, and exceptionally comfortable bedding. Located in the heart of Abuja, we are dedicated to providing high-quality yet affordable bed sheets, duvet sets, pillowcases, and complete bedding essentials designed to transform your bedroom into a serene and cozy retreat.',
                p2: 'We believe that comfort should never be compromised. That’s why we carefully curate products that combine durability, elegance, and softness—helping you create a space that feels as good as it looks.',
                p3: 'With fast and reliable delivery across Abuja and its surrounding areas, Cozy Cover makes luxury comfort easily accessible, wherever you are.',
                cta: 'Sleep better. Live cozier. With Cozy Cover.'
            },
            common: { loading: 'Loading...', notFound: 'Product not found', addToCart: 'Add to Cart', quickAdd: 'Quick Add' }
        }
    },
    fr: {
        translation: {
            nav: { home: 'Accueil', shop: 'Literie', about: 'À Propos', contact: 'Contact', search: 'Rechercher' },
            hero: {
                span: 'Élevez Votre Sommeil',
                title: 'Le Confort Redéfini',
                subtitle: 'Découvrez notre collection premium de literie durable et éthique, conçue pour le sanctuaire moderne.',
                button: 'Acheter la Literie'
            },
            home: { bestSellers: 'Meilleures Ventes', bestSellersDesc: 'Les coups de cœur de nos clients pour une nuit parfaite.', viewAll: 'Tout Voir' },
            newsletter: { title: 'Rejoignez le Club Confort', subtitle: 'Abonnez-vous pour recevoir des mises à jour et des offres exclusives.', placeholder: 'Entrez votre adresse email', button: 'S\'abonner' },
            footer: {
                brand: 'Literie Cozy Cover',
                brandDesc: 'Collections de literie premium conçues pour un sommeil réparateur et un confort régénérateur.',
                shop: 'Boutique',
                allBedding: 'Toute la Literie',
                sheets: 'Draps',
                duvets: 'Couettes',
                pillows: 'Oreillers',
                support: 'Assistance',
                contactUs: 'Contactez-nous',
                shipping: 'Livraison et Retours',
                faq: 'FAQ',
                privacy: 'Politique de Confidentialité',
                stayConnected: 'Restez Connecté',
                newsletter: 'Abonnez-vous pour des offres exclusives.',
                emailPlaceholder: 'Entrez votre email',
                join: 'S\'abonner',
                rights: 'Tous droits réservés.',
                terms: 'Conditions d\'Utilisation'
            },
            contact: {
                title: 'Contactez-nous',
                subtitle: 'Des questions sur notre literie ? Nous sommes là pour vous aider à créer votre sanctuaire.',
                formTitle: 'Envoyez-nous un message',
                name: 'Nom Complet',
                email: 'Adresse Email',
                subject: 'Sujet',
                message: 'Message',
                submit: 'Envoyer',
                visitTitle: 'Visitez Notre Studio',
                address: 'Adresse',
                phone: 'Téléphone',
                follow: 'Suivez-nous',
                quote: 'Le sommeil est la chaîne d\'or qui lie la santé et nos corps ensemble.',
                author: 'Thomas Dekker',
                success: 'Merci de nous avoir contactés !'
            },
            shop: {
                title: 'Toute la Literie',
                items: 'articles',
                filters: 'Filtres',
                sortBy: 'Trier par',
                mostPopular: 'Plus Populaires',
                newest: 'Plus Récents',
                priceLowHigh: 'Prix : Croissant',
                priceHighLow: 'Prix : Décroissant',
                noProducts: 'Aucun produit trouvé',
                tryAdjusting: 'Essayez d\'ajuster vos filtes pour trouver ce que vous cherchez.',
                clearFilters: 'Effacer tous les filtres',
                showResults: 'Afficher les résultats'
            },
            filters: { category: 'Catégorie', priceRange: 'Gamme de Prix', size: 'Taille', color: 'Couleur', min: 'Min', max: 'Max', clearAll: 'Effacer tous les filtres' },
            product: { reviews: 'Avis', color: 'Couleur', size: 'Taille', quantity: 'Quantité', addToCartPrice: 'Ajouter au Panier - {{price}}', freeShipping: 'Livraison gratuite dès $200', easyReturns: 'Retours sous 30 jours', highlights: 'Points Forts', similar: 'Vous Aimerez Aussi' },
            cart: { title: 'Panier', empty: 'Votre Panier est Vide', emptySubtitle: 'Il semble que vous n\'ayez rien ajouté à votre panier.', startShopping: 'Commencer vos achats', summary: 'Résumé de la Commande', subtotal: 'Sous-total', shipping: 'Livraison', shippingFree: 'Gratuite', tax: 'Taxes', taxDesc: 'Calculées à la caisse', total: 'Total', checkout: 'Passer à la Caisse', remove: 'Supprimer', continue: 'Continuer vos Achats' },
            checkout: {
                title: 'Caisse',
                shippingInfo: 'Informations de Livraison',
                firstName: 'Prénom',
                lastName: 'Nom',
                city: 'Ville',
                zip: 'Code Postal',
                phone: 'Téléphone',
                payment: 'Paiement',
                paymentDesc: 'L\'intégration du paiement se ferait ici.',
                placeOrder: 'Passer la Commande',
                thankYou: 'Merci !',
                orderSuccess: 'Votre commande a été passée avec succès.',
                confirmation: 'Nous avons envoyé un email de confirmation à {{email}}.',
                orderId: 'Votre numéro de commande est',
                returnHome: 'Retour à l\'Accueil'
            },
            about: {
                title: 'À Propos de Cozy Cover',
                p1: 'Cozy Cover est la destination de confiance d\'Abuja pour une literie haut de gamme, élégante et exceptionnellement confortable. Situés au cœur d\'Abuja, nous nous consacrons à fournir des draps, des ensembles de couettes, des taies d\'oreiller et des accessoires de literie complets de haute qualité mais abordables, conçus pour transformer votre chambre en un refuge serein et confortable.',
                p2: 'Nous pensons que le confort ne doit jamais être compromis. C\'est pourquoi nous sélectionnons avec soin des produits qui allient durabilité, élégance et douceur, vous aidant à créer un espace qui est aussi agréable à l\'œil qu\'au toucher.',
                p3: 'Avec une livraison rapide et fiable dans tout Abuja et ses environs, Cozy Cover rend le confort de luxe facilement accessible, où que vous soyez.',
                cta: 'Dormez mieux. Vivez plus confortablement. Avec Cozy Cover.'
            },
            common: { loading: 'Chargement...', notFound: 'Produit non trouvé', addToCart: 'Ajouter au Panier', quickAdd: 'Ajout Rapide' }
        }
    },

    ru: {
        translation: {
            nav: { home: 'Главная', shop: 'Постельное белье', about: 'О нас', contact: 'Контакт', search: 'Поиск' },
            hero: { span: 'Улучшите свой сон', title: 'Новый уровень комфорта', subtitle: 'Откройте для себя нашу премиальную коллекцию экологичного и этичного постельного белья, созданного для современного дома.', button: 'Купить сейчас' },
            home: { bestSellers: 'Хиты продаж', bestSellersDesc: 'Любимые товары наших клиентов для идеального сна.', viewAll: 'Смотреть все' },
            newsletter: { title: 'Клуб ценителей комфорта', subtitle: 'Подпишитесь, чтобы получать новости и эксклюзивные предложения.', placeholder: 'Ваш email', button: 'Подписаться' },
            footer: { brand: 'Постельное белье Cozy Cover', brandDesc: 'Премиальные коллекции постельного белья для спокойного сна и комфорта.', shop: 'Магазин', allBedding: 'Все товары', shipping: 'Доставка и возврат', privacy: 'Конфиденциальность', join: 'Подписаться', rights: 'Все права защищены.', terms: 'Условия' },
            contact: { title: 'Связаться с нами', formTitle: 'Напишите нам', name: 'Полное имя', email: 'Email', subject: 'Тема', message: 'Сообщение', submit: 'Отправить', visitTitle: 'Наша студия', address: 'Адрес', phone: 'Телефон', follow: 'Следите за нами', quote: 'Сон — это золотая цепь, которая связывает воедино здоровье и наши тела.', author: 'Томас Деккер', success: 'Спасибо за ваше обращение!' },
            shop: { title: 'Все товары', items: 'товаров', filters: 'Фильтры', sortBy: 'Сортировка', mostPopular: 'Популярные', newest: 'Новинки', priceLowHigh: 'Дешевле', priceHighLow: 'Дороже', noProducts: 'Товары не найдены', clearFilters: 'Сбросить фильтры', showResults: 'Показать результаты' },
            filters: { category: 'Категория', priceRange: 'Цена', size: 'Размер', color: 'Цвет', min: 'От', max: 'До', clearAll: 'Сбросить всё' },
            product: { reviews: 'Отзывы', color: 'Цвет', size: 'Размер', quantity: 'Количество', addToCartPrice: 'В корзину - {{price}}', freeShipping: 'Бесплатная доставка от $200', easyReturns: '30 дней на возврат', highlights: 'Особенности', similar: 'Вам также может понравиться' },
            cart: { title: 'Корзина', empty: 'Корзина пуста', startShopping: 'Перейти к покупкам', summary: 'Заказ', subtotal: 'Сумма', shipping: 'Доставка', total: 'Итого', checkout: 'Оформить заказ', remove: 'Удалить' },
            checkout: {
                title: 'Оформление',
                shippingInfo: 'Информация о доставке',
                firstName: 'Имя',
                lastName: 'Фамилия',
                city: 'Город',
                zip: 'Почтовый индекс',
                phone: 'Телефон',
                payment: 'Оплата',
                paymentDesc: 'Здесь будет интеграция оплаты.',
                placeOrder: 'Оформить заказ',
                thankYou: 'Спасибо!',
                orderSuccess: 'Ваш заказ успешно оформлен.',
                confirmation: 'Мы отправили подтверждение на {{email}}.',
                orderId: 'Номер заказа',
                returnHome: 'На главную'
            },
            about: {
                title: 'О Cozy Cover',
                p1: 'Cozy Cover — это надежное место в Абудже для покупки высококачественного, стильного и исключительно комфортного постельного белья. Расположенные в самом сердце Абуджи, мы стремимся предоставлять высококачественные, но доступные простыни, пододеяльники, наволочки и полные комплекты постельных принадлежностей, предназначенные для того, чтобы превратить вашу спальню в спокойное и уютное убежище.',
                p2: 'Мы верим, что комфорт никогда не должен быть под угрозой. Вот почему мы тщательно отбираем товары, сочетающие в себе долговечность, элегантность и мягкость, помогая вам создать пространство, которое ощущается так же хорошо, как и выглядит.',
                p3: 'Благодаря быстрой и надежной доставке по Абудже и ее окрестностям, Cozy Cover делает роскошный комфорт легкодоступным, где бы вы ни находились.',
                cta: 'Спите лучше. Живите уютнее. С Cozy Cover.'
            },
            common: { loading: 'Загрузка...', notFound: 'Товар не найден', addToCart: 'В корзину', quickAdd: 'Быстрый заказ' }
        }
    },

};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
