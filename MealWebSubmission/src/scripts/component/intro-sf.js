class IntroItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
                <div id="biograph" class="bio-graph">
                    <h1>What meals to make today</h1>
                    <p>Kuliner merupakan suatu kegiatan yang menyenangkan dimana setiap kuliner dari berbagai daerah memiliki ciri khas tersendiri mulai dari cara pembuatannya, sampai juga dengan cara memasaknya. Setiap daerah juga memiliki makanan khas, mulai dari Dessert, Pasta, Makanan utama, dan masih banyak lagi. Web ini menyediakan beberapa makanan populer dan juga cara memasakknya serta juga bahan - bahan apa saja yang dibutuhkan.</p>
                    <p>Untuk mengetahui lebih lanjut, carilah makanan yang anda sukai pada web ini:</p>
                </div>
                `;
    }
}

customElements.define("intro-item", IntroItem);