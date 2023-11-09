#!/usr/bin/env gjs

imports.gi.versions.Gtk= "3.0";
const { Gtk }= imports.gi;

Gtk.init(null);

let label= new Gtk.Label({label: 'Hello World!'});


let root= new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 10
});

let cont= new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 10
});

cont.set_halign(Gtk.Align.CENTER);
cont.set_valign(Gtk.Align.CENTER);

cont.pack_start(label, false, false, 0);

root.pack_start(cont, true, true, 0);

let win= new Gtk.Window();
win.add(root);
win.show_all();
win.resize(200, 100);
win.set_title('Hello World App');

Gtk.main();
