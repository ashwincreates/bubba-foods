import React from 'react';

function Support() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please feel free to contact us using the following methods:</p>
            <ul>
                <li>
                    <span className="support-label">Email:</span>
                    <a href="mailto:support@yourapp.com">support@yourapp.com</a>
                </li>
                <li>
                    <span className="support-label">Phone:</span>
                    <a href="tel:+1-555-1234">+1-555-1234</a> (Available Monday to Friday from 9am to 5pm)
                </li>
            </ul>

            <h1>FAQs</h1>
            <h2>Ordering</h2>
            <ul>
                <li>
                    <span className="faq-label">How do I place an order?</span>
                    <p>To place an order, select the restaurant you want to order from, add items to your cart, and checkout.</p>
                </li>
                <li>
                    <span className="faq-label">Can I modify or cancel my order after it has been placed?</span>
                    <p>You can modify or cancel your order before the restaurant starts preparing it. After that, cancellation or modification is not possible.</p>
                </li>
                <li>
                    <span className="faq-label">What if I have a problem with my order?</span>
                    <p>If you have any issues with your order, please contact our support team and we will do our best to resolve the issue as quickly as possible.</p>
                </li>
            </ul>

            <h2>Payment</h2>
            <ul>
                <li>
                    <span className="faq-label">What payment methods do you accept?</span>
                    <p>We accept all major credit cards and digital wallets like Google Pay, Apple Pay, and PayPal.</p>
                </li>
                <li>
                    <span className="faq-label">Is my payment information secure?</span>
                    <p>Yes, we use industry-standard encryption and security measures to protect your payment information.</p>
                </li>
            </ul>

            <h2>Delivery</h2>
            <ul>
                <li>
                    <span className="faq-label">How long does delivery take?</span>
                    <p>Delivery times vary depending on the restaurant and your location. You can see the estimated delivery time when you place your order.</p>
                </li>
                <li>
                    <span className="faq-label">What if my order is late or doesn't arrive?</span>
                    <p>If your order is late or doesn't arrive, please contact our support team and we will investigate the issue and take appropriate action.</p>
                </li>
            </ul>
        </div>
    );
}

export default Support;
