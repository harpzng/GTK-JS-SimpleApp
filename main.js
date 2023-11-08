#!/usr/bin/env gjs

imports.gi.versions.Gtk= "3.0";
const { Gtk }= imports.gi;

Gtk.init(null);

let label= new Gtk.Label({label: 'Hello World!'});
label.set_halign(Gtk.Align.CENTER);
label.set_valign(Gtk.Align.CENTER);

let root= new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 10
});
root.pack_start(label, true, false, 0);

let win= new Gtk.Window();
win.add(root);
win.show_all();
//win.resize(200, 100);

Gtk.main();
